module.exports.run = () => {
  bot.guilds.forEach(async ga => {
    let ids = ga.id
    let em = new discord.RichEmbed()
    .setTitle("Bender Server IDs")
    .setDescription(`Tous mes identifiants de serveur sont ${ids}`)
    .setAuthor("Bender")
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
  })
}

module.exports.help = {
  name: "serverids"
}
