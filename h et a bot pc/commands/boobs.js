const request = require("snekfetch")
const fs = require("fs")

module.exports.run = (bot, message, args) => {
  var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":underage: NSFW Commande. Veuillez passer au canal NSFW pour utiliser cette commande petit coquin .")
    } else {
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`boobs.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./boobs.jpg`)
        })
    }
}

module.exports.help = {
  name: "boobs"
}
