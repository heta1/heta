const config = require('../config.json')
const prefix = config.prefix
const {baselogger} = require('../logger.js')

module.exports.run = (bot, message, args, discord) => {
 let member = message.mentions.members.first();
 let channel = message.channel
 let reason = args.slice(1).join(' ')
 let embed = new discord.RichEmbed()
 .setTitle(`${bot.user.username} Kick System`)
 .setDescription(`${member.username} a été expulsé pour la raison ${reason}`)
 if (member.displayName) {
   embed.setDescription(`${member.displayName} a été expulsé pour la raison ${reason}`)
 }
 
 if (!reason) {
  embed.setDescription(`${member.displayName} a été frappé avec succès.`)
 }
 
  if (message.member.hasPermission("KICK_MEMBERS")) {
   
    member.kick(reason).then(channel.send({ embed })).catch(err => {
      console.error(err)
      baselogger(bot, `le kick échoué dans la guild ${member.guild.name}. et de l'utilisateur suivant : ${member.username}. Erreur : ${err}`, message.guild.iconURL)
    })
  } else {
    message.channel.send("Vous n'avez pas la permission de donner des coups de pied aux gens. S'il y a quelqu'un qui doit être expulsé, contactez un administrateur ou un modérateur.")
  } 
}

module.exports.help = {
  name: "kick",
  usage: "^kick {@user} [reason]",
  information: "Kicks a mentioned user."
}
