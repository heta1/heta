module.exports.run = (bot, message, args, discord) => {
      let embed = new discord.RichEmbed()
      .setTitle(`Test`)
      .setThumbnail(bot.user.avatarURL)
      .setDescription(`Test réussi!`)
      .setImage(`http://blvcccvrd.com/images/black-checkmark-21.gif`)
      .setAuthor(bot.user.username)
      .setColor(`RANDOM`)
      message.channel.send("Test...").then(msg => {
        setTimeout(() => {
          msg.edit({ embed })
        }, 5000)
      })
    }

module.exports.help = {
  name: "test",
  usage: "^test",
  information: "null"
}
