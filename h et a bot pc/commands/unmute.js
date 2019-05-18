
const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  if (message.member.hasPermission("MANAGE_MESSAGES")) {	
	let muteRole = message.guild.roles.find("name", "Muted");
	let member = message.mentions.members.first();

	if(!member.roles.find("name", "Muted")) return message.channel.send(`:x: ${member.user.username}, n'est pas muet!`).then(m => m.delete(2500))
		
	member.removeRole(muteRole.id);
	message.channel.send(`${member.user.username}, est maintenant sans sourdine`).then(m => m.delete(2500))
} else {
	message.channel.send("Désolé, vous ne disposez pas des autorisations requises!")
}
}

module.exports.help = {
	name: "unmute",
	usage: `[user] (reason)`,
	information: ""
}
