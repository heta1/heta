const request = require('snekfetch');
const fs = require("fs")

exports.run = (bot, message, args, discord) => {
    var max = 5511;
    var min = 1000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
        message.channel.send(":underage: NSFW Commande. Veuillez passer au canal NSFW pour utiliser cette commande.")
    } else {
        var randomname = Math.floor(Math.random() * (99999999999999999999 - 11111111111111111111 + 0)) + 11111111111111111111;
        request.get("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg").then(r => {
            fs.writeFile(`ass.jpg`, r.body)
            message.channel.sendFile(r.body)
            fs.unlink(`./ass.jpg`)
        })
    }
}

module.exports.help = {
  name: "butt"
}
