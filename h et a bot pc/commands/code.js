const code = require("../codes.json").code

module.exports.run = (bot, message, args, discord) => {
  if (message.content == "^redeem " + "bender") {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.displayName} Code de rachat`)
    .setDescription(`Code correct! Utilisez cette invitation pour accéder à la discord de base de Bender où vous obtiendrez le rôle Divin, et bien plus encore!`)
    .addField(`[Invite](https://discord.gg/3cPuxjA " Cliquez pour aller à la base Bender!")`)
    .setAuthor(`${bot.user.avatarURL} ${bot.user.displayName}`)
    .setColor(`BLUE`)
    .setFooter(new Date().getTime().toString())
    message.channel.send({ em }).then(m => m.delete(5500))
  } else {
    message.channel.send("Désolé, code incorrect.")
  }
}

module.exports.help = {
  name: "redeem"
}
