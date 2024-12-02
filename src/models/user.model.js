const mongoose = require("mongoose")


const userModel = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
}, 
{ collection: "users" , timestamps: true }
)

module.exports = mongoose.model("user", userModel)