const config = require('../config.json')
const oid = "459914367203278859"

module.exports.run = (bot, message, args, discord) => {
 var game = args.join(' ')
  if (message.author.id == oid) {
   if (!game) {
    message.channel.send(`:ok_hand: Okay, Je vais remettre mon activité à la normale!`)
    bot.user.setActivity(` des film X | ${bot.guilds.size} servers`, {type: "WATCHING"})
  } else {
    bot.user.setActivity(`${game}`, {type: "PLAYING"})
    message.channel.send(`:ok_hand: Okay, Je vais mettre mon activité à'${game}'!`)
  }
  } else {
     message.channel.send("Nan !")
  } 
}

module.exports.help = {
  name: "changegame",
  usage: ``,
  information: ""
}
