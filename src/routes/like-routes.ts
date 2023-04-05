import { dislikePost, likePost } from "../controllers/like-controller";
import { Router } from "express";

const likeRouter = Router()

likeRouter
  .post('/:postId', likePost)
  .delete('/postId', dislikePost)

export default likeRouter 