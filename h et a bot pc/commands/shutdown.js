const config = require('../config.json')
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  if (message.author.id == config.ownerid) {
    let embed = new discord.RichEmbed()
      .setTitle("Bender Shutdown")
      .setDescription(":wave: Bender va maintenant fermer :cry:")
      .setThumbnail(bot.user.avatarURL)
      .setColor('BLUE')
    message.channel.send({ embed })
    setTimeout(function() {
      process.exit(666);
    }, 500)
  } else {
    message.channel.send("Nan!")
  }
}

module.exports.help = {
  name: "shutdown",
  usage: ``,
  information: ""
}
