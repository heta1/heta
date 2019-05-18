module.exports.run = (bot, message, args) => {
	if (message.member.hasPermission(["MANAGE_MESSAGES"], false, true, true)) {
  if (isNaN(args[0])) {
    return message.channel.send('Veuillez définir un numbre.').then(m => m.delete(2000))
  }

  var am = args[0]
  if (am < 3) {
    return message.channel.send('Le minimum de message que vous pouvez supprimer est 3.').then(m => m.delete(2000))
  }
  if (am > 190) {
    message.channel.send("Le montant maximum que vous pouvez supprimer est de 90.").then(m => m.delete(2000))
    return;
  }
  message.channel.send(":exclamation: Commence à purger " + am + "messages... :exclamation:").then(m => m.delete(2500))

  setTimeout(function() {
	message.channel.fetchMessages({limit: am}).then(m => message.channel.bulkDelete(m))
	message.channel.send("Purge Terminé ! " + am + " messages!").then(m => m.delete(2000))
  }, 1000);
} else {
	message.channel.send("Désolé, vous ne disposez pas des autorisations requises. :neutral_face:").then(m => m.delete(2000))
	}
}

module.exports.help = {
  name: "purge",
  usage: `[amount]`,
  information: "Supprimer x quantité de messages"
}

	
