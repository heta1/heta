const pak = require("../package.json")
const config = require("../config.json")
//🔎 👤 ⚙ 🆔 📄 📝 ⌛ 🖍 🔊 📬 🚀


module.exports.run = (bot, message, args, discord) => {
 // return; //SOON
 if (message.author.id == "459914367203278859") {
  let guild_list = []
  bot.guilds.forEach(async(guild, id) => {
    guild_list.push(`      ${guild.name}  ${id}\n`)
  })
  let embed = new discord.RichEmbed()
    .setTitle(`Bender Débogueur`)
    .setTimestamp()
    .setAuthor(`${bot.user.username} Débogueur`, bot.user.avatarURL)
    .setColor("7289DA")
    .setDescription(`
⚙ **Verqion du Bot:** ${pak.version}\n
👤 **Non du Bot:** ${bot.user.tag}\n
🆔 **Bot ID:** ${bot.user.id}\n
🚀 **Utilisation de la mémoire:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\n
🖍 **Bot Prefix:** ${config.prefix}\n
🔎 **Je connais:**\n -   ${bot.guilds.array().length} Guilds\n -   ${bot.channels.array().length} Channels\n -   ${bot.users.array().length} Users\n
⌛ **Vie du Bot:** ${Math.round(bot.uptime / (1000 * 60 * 60))} jours, ${Math.round(bot.uptime / (1000 * 60)) % 60}  minutes, ${Math.round(bot.uptime / 1000) % 60} secondes.\n`)
  .addField(`📝 **Les guild que je connais:** [#${bot.guilds.array().length}]\n${guild_list}`)
  message.channel.send({ embed })
} else {
  message.channel.send("Nan!")
} 
}

module.exports.help = {
  name: "debug",
  usage: ``,
  information: "infomation"
}

module.exports.settings = {
  permission: "Creator",
  deleteresponder: true,
  category: "Info"
}
