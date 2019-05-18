const snekfetch = require('snekfetch')

module.exports.run = (bot, message, args, discord) => {
  snekfetch.get('http://api.icndb.com', function(err, body) {
    let em = new discord.RichEmbed()
    .setTitle(`Bender Chuck Norris Blagues`)
    .setDescription(JSON.stringify(body.joke))
    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    
    message.channel.send({ em })
  }) 
}

module.exports.help = {
  name: "chucknorris"
}
