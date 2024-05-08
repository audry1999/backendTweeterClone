import data from "../data.js"



export function get(req, res){
    res.send('reception avec sucès')
}

export function getAllTweet(req, res){
    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

}