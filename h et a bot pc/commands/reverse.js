module.exports.run = async (bot, message, args , discord) => {



    let msg = args.slice(0).join(' ')
    if (!msg) return message.reply("Merci d'entrer un mot à inverser !")
    var msginverse = msg.split("").reverse().join("")
    let embed = new discord.RichEmbed()
    .setTitle("**Reverse une chaîne**")
    .setColor("RANDOM")
    .addField("Mot normal", msg)
    .addField("Mot inverser", msginverse)
    .setFooter("Bender | Bot", message.author.displayAvatarURL)
    message.channel.send(embed)

}

module.exports.help = {
    name: "reverse"
  }