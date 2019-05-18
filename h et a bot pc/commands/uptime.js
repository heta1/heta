module.exports.run = (bot, message, args) => {
  var msgArray = [];
  msgArray.push(`**Vie de ${bot.user.username} **\n`);
  var hrs = Math.round(bot.uptime / (1000 * 60 * 60)) + " jour(s),"
  var mins = " " + Math.round(bot.uptime / (1000 * 60)) % 60 + " minute(s), "
  var sec = Math.round(bot.uptime / 1000) % 60 + " second(s)"
  if (hrs == "0 jour(s),") hrs = ""
  if (mins == " 0 minute(s), ") mins = ""
  msgArray.push(hrs + mins + sec)
  message.channel.send(msgArray).then(m => m.delete(15000))
}

module.exports.help = {
  name: "uptime",
  usage: ``,
  information: ""
}
