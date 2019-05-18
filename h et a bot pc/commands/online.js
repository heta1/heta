const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == process.env.oid) {
  bot.user.setStatus(`online`)  
  let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Définissez le statut du bot sur Online!")
    .setColor("GREEN")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`Cette commande a été utilisée à ${new Date()}`)
  message.channel.send({ embed })
 } else {
      message.channel.send("Nope!") 
  }
}

module.exports.help = {
  name: "onbot",
  usage: "",
  info: ""
}
