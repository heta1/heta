const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let result = Math.floor((Math.random() * 100) + 1);
  		message.channel.send(":white_check_mark: | **Vous avez fait**" + result);
}

module.exports.help = {
  name: "roll"
}