module.exports.run = (bot, message, args, discord) => {
  const result = Math.round(Math.random());
  if (result) {
    let embed = new discord.RichEmbed()
    .setTitle(`${bot.user.username} Coinflip`)
    .setThumbnail(bot.user.avatarURL)
    .setDescription(`Hey! La pièce a atterri sur face! Vous gagnez.`)
    .setColor(`GREEN`)
    .setImage(`https://media3.giphy.com/media/mA51FMHGo3BDi/giphy.gif`)
    .setFooter(new Date())
    message.channel.send(embed)
  } else {
    let em = new discord.RichEmbed()
    .setTitle(`${bot.user.username} Coinflip`)
    .setDescription(`Hey! La pièce a atterri sur pile . Tu as perdu.`)
    .setColor(`RED`)
    .setImage(`https://media3.giphy.com/media/mA51FMHGo3BDi/giphy.gif`)
    .setFooter(new Date())
    message.channel.send(em)
  }
}

module.exports.help = {
  name: "coinflip",
  usage: ``,
  information: "Faire un coinflip!"
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Fun"
}
