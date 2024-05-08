import { Router } from "express";

import { post } from "../controllers/post.js";
import { getAllTweet } from "../controllers/get.js";

export const tweetRouter= Router()

tweetRouter.get('/', getAllTweet)
tweetRouter.post('/', post )
