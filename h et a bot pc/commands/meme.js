module.exports.run = (bot, message, args, discord) => {
  const m = require('automeme')
  m.getMeme('text', 1, (err, meme) => {
    if (err) {
      message.channel.send("Je n'ai pas pu avoir un meme ...")
      return console.error(err)
    }
    let em = new discord.RichEmbed()
    .setTitle("Bender Meme Generator")
    .setDescription("Voici un meme aléatoire!")
    .setImage(meme)
    .setFooter(new Date().toString())
    message.channel.send(em)
  })
}

module.exports.help = {
  name: "meme"
}
