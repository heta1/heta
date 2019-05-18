

module.exports.run = async (bot, message, args , discord) => {

    let member = message.mentions.members.first()
    if (!member) return message.reply("Merci de mentionner une personne !")
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Vous n'avez pas les permission !")
    let msg = args.slice(1).join(' ')
    if (!msg) return message.reply("Merci d'entrer un message !")
    member.send(msg)
    message.reply("Envoi effectué !")
message.delete(0)
}
module.exports.help = {
    name: "mp"
  }