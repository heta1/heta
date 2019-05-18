const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  if (message.author.id == "459914367203278859") {
    const content = message.content.split(' ').slice(1).join(' ');
  const result = new Promise((resolve, reject) => resolve(eval(content)));

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Pas pour tes yeux');
    return message.channel.send(output, { code: 'js' }).then(m => m.delete(5000))
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(bot.token)) err = err.replace(bot.token, 'Pas pour tes yeux');

    return message.channel.send(err, { code: 'js' })
  });  
  } else {
    message.channel.send("Nan!")
  }
  }

module.exports.help = {
  name: "eval",
  usage: ``,
  information: "Welp"
}

module.exports.settings = {
  permission: "Creator",
  deleteresponder: true,
  category: "Info"
}
