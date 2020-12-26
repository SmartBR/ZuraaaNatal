const router = require("express").Router()
const passport = require("passport")

module.exports = (client) => {

    router.get("/login", passport.authenticate("discord"))

    router.get("/callback", passport.authenticate("discord"), (req, res) => {
        res.redirect("/")
    })

    return router
}