const pak = require('../package.json')

module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle('Bender Status')
  .setColor(`RANDOM`)
  .setDescription(`Bot Status: Online
  Version du Bot : ${pak.version}
  Les serveur du Bot: ${bot.guilds.size}
  Utilisateurs du Bot: ${bot.users.size}
  Salons du Bot: ${bot.channels.size}
  Memoire utlisé: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
  Discord.js Version 11.3.1
  Node Version 8.9.4 

  Bender Website:Bientot )`)
  .setFooter(`Bender Status`)
  .setTimestamp()  
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "stats"
}
