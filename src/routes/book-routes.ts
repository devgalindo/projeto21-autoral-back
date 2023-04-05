import { getAllBooks, getBook, getCommunityBooks, getCommunityBook, getUserBooks, getUserBook } from "../controllers/book-controller";
import { Router } from "express";

const bookRouter = Router()

bookRouter
  .get('/', getAllBooks)
  .get('/:bookId', getBook)
  .get('/:commmunityId/books', getCommunityBooks)
  .get('/:commmunityId/:bookId', getCommunityBook)
  .get('/:userId/books', getUserBooks)
  .get('/:userId/:bookId', getUserBook)

export default bookRouter 