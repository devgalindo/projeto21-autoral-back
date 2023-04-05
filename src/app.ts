import express from "express";
import "express-async-errors";
import cors from "cors";
import { connectDb, disconnectDb, loadEnvs } from "./config";
import { authRouter, bookRouter, commentRouter, communityRouter, likeRouter, postRouter } from "./routes";

loadEnvs();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/health", (req, res) => res.send("OK!"))
  .use("/auth", authRouter)
  .use("/posts", postRouter)
  .use("/books", bookRouter)
  .use("/communities", communityRouter)
  .use("/like", likeRouter)
  .use("/comment", commentRouter);

export function init() {
  connectDb();
  return Promise.resolve(app);
}

export function close() {
  disconnectDb();
}

export default app;
