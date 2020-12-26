const mongoose = require("mongoose")
const config = require("../../resource/config.json")

mongoose.connect(config.mongo_uri, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado ao MongoDB.")
}).catch(err => {
    console.error("Não foi possível conectar ao MongoDB.")
})