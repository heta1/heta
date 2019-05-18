module.exports.run = (bot, message, args) => {
  message.channel.send(`Je suis dans ${bot.guilds.array().length} serveurs. Je connais  ${bot.users.array().length} users, et j'ai ${bot.channels.array().length} channels.`)
}

module.exports.help = {
  name: "listservers",
  usage: ``,
  information: ""
} 
