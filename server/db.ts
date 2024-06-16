
import Mongoose from 'mongoose'

// const localDB = `mongodb://localhost:27017/role_auth`


export const connectDB = async (mongoDB_URL: string) => {
	return await Mongoose.connect(mongoDB_URL)
}