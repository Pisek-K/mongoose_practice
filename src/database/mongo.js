const mongoose = require('mongoose')

const MONGODB_URL = "mongodb://localhost:27017/test"

module.exports = async function mongodbConnect() {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("connected to mongodb successfully")
    } catch (error) {
        console.log("failed to connect to mongodb",error)
    }
}