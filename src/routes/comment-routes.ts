import { deleteComment, getComment, getPostComments, postComment, putComment } from "../controllers/comment-controller";
import { Router } from "express";

const commentRouter = Router();

commentRouter
  .get("/:postId", getPostComments)
  .get("/:commentId", getComment)
  .post("/", postComment)
  .delete("/:commentId", deleteComment)
  .put("/:commentId", putComment);

export default commentRouter 
