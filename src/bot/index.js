const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("../../resource/config.json")

client.on("ready", () => {
    require("../website/server")(client)

    console.log("Bot online!")
})

client.login(config.token)