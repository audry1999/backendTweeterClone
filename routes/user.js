import { Router } from "express";
import { get } from "../controllers/get.js";

export const userRouter= Router()

userRouter.get('/', get)
