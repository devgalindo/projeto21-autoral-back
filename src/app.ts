import express from "express";
import cors from "cors";

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
