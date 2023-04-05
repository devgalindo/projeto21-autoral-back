import { signin, signup } from "../controllers/auth-controller";
import { Router } from "express";

const authRouter = Router()

authRouter
  .post('signup', signup)
  .post('signin', signin)

export default authRouter 