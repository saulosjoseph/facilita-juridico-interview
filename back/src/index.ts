import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import Db from "../db/config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const db = new Db()

app.get("/", async (req: Request, res: Response) => {
  const result = await db.query('SELECT NOW()')
  res.send(result);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});