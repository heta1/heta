 module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle(`Bender Snek`)
  .setDescription(`Je suis le grand serpent . Es-toi ?`)
  .setImage("https://media.giphy.com/media/26DMWpQjDSf4AI9Ik/giphy.gif")
  .setThumbnail(bot.user.avatarURL)
  setInterval(() => {
   em.setColor(`RANDOM`)
  }, 1000)
  message.channel.send(em)
 }
 
 module.exports.help = {
  name: "snek"
 }
