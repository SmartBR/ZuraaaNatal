const express = require("express")
const app = express()
const config = require("../../resource/config.json")

app.listen(config.port || 80, () => {
    console.log("Website online!")
})