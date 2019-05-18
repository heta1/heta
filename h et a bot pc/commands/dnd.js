const oid = "459914367203278859"

module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`dnd`)
  let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setThumbnail(bot.user.avatarURL)
    .setDescription("Définissez le statut du bot sur Ne pas déranger!")
    .setFooter(`Cette commande a été utilisée à ${new Date().getTime()}`)
    .setColor("RED")
    
  message.channel.send({ embed })
  } else {
    message.channel.send("Nan!")
  }
}

module.exports.help = {
  name: "dnd"
}
 
