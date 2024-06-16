import dotenv from 'dotenv';
import { connectDB } from './db';
import { setServer } from './server';
import logger from './utils';

dotenv.config()

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGO_DB;

try {

	(async function mountSever() {
		if (PORT && MONGODB_URL) {
			// Mount Database
			await connectDB(MONGODB_URL)
				.then(() => logger.stateConnection('✨ Database'))
				.catch((error) => logger.stateError({ error }))

			// Mount Server
			await setServer(PORT)
				.then(() => logger.stateConnection('✨ Server'))
				.catch((error) => logger.stateError({ error }))
		}
	})()

} catch (error) {
	console.error('[ ROOT ERROR ]:', error)
}