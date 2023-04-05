import { deletePost, getCommunityPosts, getPost, getPosts, getUserPosts, postPost, putPost } from "../controllers/post-controller";
import { Router } from "express";

const postRouter = Router()

postRouter
  .get('/', getPosts)
  .get('/:postId', getPost)
  .get('/:userId', getUserPosts)
  .get('/communityId', getCommunityPosts)
  .post('/', postPost)
  .put('/:postId', putPost)
  .delete('/:postId', deletePost)

export default postRouter 