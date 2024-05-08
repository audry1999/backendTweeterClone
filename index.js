import express from "express"
import { tweetRouter } from "./routes/tweet.js"
import { userRouter } from "./routes/user.js"
import { usersRouter } from "./routes/users.js"




const port = 4001
const app = express()
app.use('/tweets', tweetRouter)
app.use('/user', userRouter)
app.use('/users', usersRouter)




app.listen(port, ()=>{console.log("le serveur est creer");})