const userModel = require("../models/user.model")
const taskModel = require("../models/task.model")

exports.mongodb = {
    user : userModel,
    task : taskModel
}
