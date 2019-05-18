module.exports.run = (bot, message, args, discord) => {
	
	
	let member = message.mentions.members.first();
	if(!member) return message.channel.send("Vous devez mentionner quelqu'un.");
	let embed = new discord.RichEmbed()
	.setTitle(`kiss!`)
	.setImage(`https://data.photofunky.net/output/image/f/a/3/5/fa35c3/photofunky.gif`)
	.setDescription(`:kissing_closed_eyes:${message.author} à kiss <@${member.id}>  `)
	.setThumbnail(bot.user.avatarURL)
	.setColor(`RANDOM`)
	message.channel.send({ embed });
}

module.exports.help = {
	name: "kiss",
}
