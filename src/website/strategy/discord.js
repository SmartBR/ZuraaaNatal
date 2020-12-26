const passport = require("passport")
const DiscordStrategy = require("passport-discord")
const config = require("../../../resource/config.json")

passport.use(new DiscordStrategy({
    clientID: config.client.id,
    clientSecret: config.client.secret,
    scope: ["identify"],
    callbackURL: config.domain +  config.oauth2.callback
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile)
}))

passport.serializeUser((profile, done) => {
    done(null, profile)
})

passport.deserializeUser((profile, done) => {
    done(null, profile)
})
