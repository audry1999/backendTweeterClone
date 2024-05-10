import { Router } from "express";
import { getTweetId } from "../controllers/get.js";

export const usersRouter = Router()
usersRouter.get('/:id', getTweetId)
