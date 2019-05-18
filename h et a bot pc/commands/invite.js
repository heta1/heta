const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("Bender Invitation")
  .setDescription(`Voici le lien pour ajouté Bender !!. \n\n[Click ici !](https://discordapp.com/oauth2/authorize?client_id=475673658971652109&scope=bot&permissions=2146958591) pour m'invité !`)
  .setColor("GREEN")
  .setFooter(`Cette commande a été utilisée à ${new Date}`)
  message.channel.send({ embed })
}

module.exports.help = {
  name: "invite",
}
