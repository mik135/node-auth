import express from "express"
import db from "../db/conn.js"

const userRoutes = express.Router()

userRoutes.get('/users', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    let collection = db.collection('users');
    let result = await collection.find({}).limit(10).toArray()
    res.send(result)
})

export default userRoutes;