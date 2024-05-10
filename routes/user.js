import { Router } from "express";
import { getUserData } from "../controllers/get.js";



export const userRouter= Router()

userRouter.get('/', getUserData)
