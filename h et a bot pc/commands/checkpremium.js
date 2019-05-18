const fs = require('fs')
const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
    let ga = bot.guilds.get('4459914367203278859')
    let member = message.author
    if (member.id === message.guild.owner.id) {
    if (ga.members.find('id', member.id).roles.find('name','[Divin]')) {
        
            let em = new discord.RichEmbed()
            .setTitle("Bender Premium")
            .setAuthor(`🤑`)
            .setDescription(`:moneybag: Votre statut premium est actif! Merci de faire un don! :moneybag:`)
            .setThumbnail(bot.user.avatarURL)
            .setColor("GREEN")
            message.channel.send(em)
    } else {
        let em = new discord.RichEmbed()
        .setTitle("Bender Premium")
        .setAuthor(`🤑`)
        .setDescription(`:thumbsdown: Votre statut de prime est inactif. Acheter premium [ici!] (En cours de developement) "achat premium") :thumbsdown:`)
        .setThumbnail(bot.user.avatarURL)
        .setColor("RED")
        message.channel.send(em)
    }
  } else {
      let em = new discord.RichEmbed()
      .setTitle("Raté ! :face_palm: ")
      .setDescription("Vous devez être le propriétaire de cette guilde pour utiliser cette commande.")
      .setAuthor(`🤑`)
      .setThumbnail(bot.user.avatarURL)
      .setColor("RED")
      
    message.channel.send({embed: em})
  }
}

module.exports.help = {
    name: "checkpremium"
}
