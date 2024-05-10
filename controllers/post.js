import data from "../data.js"

export function postTweet(req, res){
    try {
        const id = Math.floor(Math.random() * 100000)
    const newTweet = {
        id,
        ...req.body
    }
    data.tweets.push(newTweet)
    res.status(201).json(data.tweets) 
    } catch (error) {
        res.status(404).json(error)
    }
}