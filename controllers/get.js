import data from "../data.js"


export function getAllTweet(req, res){
    try {
        res.status(200).json(data.tweets)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getTweetId= (req, res)=>{
    const land= req.params.id.toUpperCase()
    const users = data.tweets.filter((item) => item.content.body.title.details.replace(/^./, "") == land)
    try {
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json(error)
    }   
}

export function getUserData(req, res) {
    try {
        res.status(200).json(data.currentUser)
    } catch (error) {
        res.status(404).json(error)
    }
}