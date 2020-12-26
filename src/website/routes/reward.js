const router = require("express").Router()
const config = require("../../../resource/config.json")
const UserReward = require("../../database/model/UserReward")

module.exports = (client) => {

    router.get("/", async (req, res) => {
        if (!!(await UserReward.findById(req.user ? req.user.id : 0).exec())) return res.redirect("/")

        const user = client.users.cache.get(req.user.id)

        
        if (user) {
            user.send("**SURPRESA!!!!!!!!!!!!!!!!!!** Seu presente chegou, vamos ver o que é ?", {
                files: [{
                    attachment: config.reward,
                    name: "SPOILER_box.png"
                }]
            }
            ).then(() => {
                res.render("reward", {
                    userSession: req.user,
                })
                new UserReward({
                    _id: req.user.id,
                    username: req.user.username,
                    discriminator: req.user.discriminator
                }).save()
            }).catch(() => {
                res.render("error", { message: `Não foi possivel enviar o presente na sua DM. (${req.user.username}#${req.user.discriminator})` })
            })
        }else res.render("error", { message: `Não foi possível encontrar seu discord na lista de usuários do ${client.user.tag}.` })

    
    })

    return router
}