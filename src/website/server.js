const express = require("express")
const app = express()

const Session = require("express-session")
const Store = require("connect-mongo")(Session)
const passport = require("passport")
const mongoose = require("mongoose")

const config = require("../../resource/config.json")
const path = require("path")

require("./strategy/discord")
require("../database/mongodb")

app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "pug")

app.use(new Session({
    secret: "secret",
    resave: true,
    saveUninitialized: false,
    store: new Store({
        mongooseConnection: mongoose.connection
    }),
    cookie: {
        expires: 684800000
    }
}))


app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, "/static")))

const oauth2Router = require("./routes/oauth2")()
app.use("/oauth2", oauth2Router)

app.get("/", (req, res) => {
    res.render("index", {
        userSession: req.user
    })
})

app.listen(config.port || 80, () => {
    console.log("Website online!")
})