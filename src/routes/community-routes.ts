import { deleteCommunity, getCommmunities, getCommunity, postCommunity, putCommunity } from "../controllers/community-controller";
import { Router } from "express";

const communityRouter = Router()

communityRouter
  .get('/', getCommmunities)
  .get('/:communityId', getCommunity)
  .post('/', postCommunity)
  .delete('/:communityId', deleteCommunity)
  .put('/:communityId', putCommunity)

export default communityRouter 
