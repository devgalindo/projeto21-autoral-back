import express from "express";
import cors from "cors";
import { connectDb, disconnectDb } from "./config/database";

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (req, res) => res.send("OK!"))
  .use("/auth")
  .use("/posts")
  .use("/books")
  .use("/communities")
  .use("/like")
  .use("/comment");

export function init() {
  connectDb();
  return Promise.resolve(app);
}

export function close() {
  disconnectDb();
}

export default app;
