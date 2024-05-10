import { Router } from "express";

import { getAllTweet } from "../controllers/get.js";
import { postTweet } from "../controllers/post.js";

export const tweetRouter= Router()

tweetRouter.get('/', getAllTweet)
tweetRouter.post('/', postTweet )

