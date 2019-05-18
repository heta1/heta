const oid = 459914367203278859

module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == oid) {
  bot.user.setStatus(`invisible`)
    let embed = new discord.RichEmbed()
    .setTitle("Status Changer")
    .setDescription("Définir avec succès le statut du bot sur Invisible!")
    .setColor("GREY")
    .setThumbnail(bot.user.avatarURL)
    .setFooter(`Cette commande a été utilisée à ${new Date}`)
    message.channel.send({ embed })
} else {
  message.channel.send("Nan!")
}
}

module.exports.help = {
  name: "invbot",
  usage: ``,
  info: ``
}
