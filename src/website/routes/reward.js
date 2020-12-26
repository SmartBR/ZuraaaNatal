const router = require("express").Router()
const UserReward = require("../../database/model/UserReward")

module.exports = (client) => {

    router.get("/", (req, res) => {
        if (!req.user || !UserReward.findById(req.user.id).exec()) return res.redirect("/")

        new UserReward({
            _id: req.user.id,
            username: req.user.username,
            discriminator: req.user.discriminator
        }).save()

        res.render("reward", {
            userSession: req.user
        })
    })

    return router
}