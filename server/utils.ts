
interface LoggerInterface {
	content?: string;
	code?: string;

}

class Logger implements LoggerInterface {
	content?: string;
	code?: string;

	constructor(content?: string, code?: string) {
		this.content = content;
		this.code = code;
	}
	state(message: string) {
		console.info(message)
	}

	stateConnection(entity: string) {
		console.info(`[ CONNECTION ] ${entity} connected`)
	}

	stateError({ error }: { error: Error }) {
		console.error(`[ ERROR ] \n\t ${error}`)
	}
}

const logger = new Logger()
export default logger

