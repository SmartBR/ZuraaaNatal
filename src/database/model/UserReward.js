const mongoose = require("mongoose")

const schema = mongoose.Schema({
    _id:  String,
    username: String,
    discriminator: String
})

module.exports = mongoose.model("UserReward", schema, "user-reward")