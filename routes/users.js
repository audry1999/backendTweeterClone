import { Router } from "express";
import { get } from "../controllers/get.js";
export const usersRouter = Router()
usersRouter.get('/:id', get)
