import type { Request, Response } from "express";
import express from "express";
import logger from "./utils";
const app = express();



export const setServer = async (PORT: number | string) => {
	app.get("/", (req: Request, res: Response) => {
		res.send("Hello World");
	})
	app.listen(PORT, async () => {
		logger.state(
			`\n\n📌 Server is running in \n\t --> http://localhost:${PORT}\n`
		)
	})
}

