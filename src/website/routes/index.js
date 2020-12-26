const router = require("express").Router()
const UserReward = require("../../database/model/UserReward")

module.exports = (client) => {

    router.get("/", async (req, res) => {
        res.render("index", {
            userSession: req.user,
            canReward: !(await UserReward.findById(req.user ? req.user.id : 0).exec())
        })
    })

    return router
}