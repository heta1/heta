const Discord = require('discord.js');
const config = require('../config.json');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {
  if (args == 0) return errors.invalidPoll(message);

  let embed = new Discord.RichEmbed()
  .setTitle(`Poll par ${message.author.username}`)
  .setColor(config.yellow)
  .setDescription(`${args}`.split(',').join(' '));

  console.log(`[${message.guild}] ${message.author.username} a créé un sondage avec la question: ${args}.`);
  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
       message.react("👍")
       message.react("👎")
     }).catch(function() {
  });
};

module.exports.help = {
  name: 'poll',
  description: 'Make a poll with a question with thumbs up and down reactions.',
  usage: 'poll [question]'
};