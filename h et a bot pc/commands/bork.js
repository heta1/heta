module.exports.run = (bot, message, args, discord) => {
	
	
	let member = message.mentions.members.first();
	if(!member) return message.channel.send("Vous devez mentionner quelqu'un.");
	let embed = new discord.RichEmbed()
	.setTitle(`BORK!`)
	.setImage(`https://orig00.deviantart.net/3bd3/f/2015/141/0/5/bork_by_chiibe-d8u6uv3.gif`)
	.setDescription(`( ͡° ͜ʖ ͡°) <@${member.id}> à été bork par ${message.author} `)
	.setThumbnail(bot.user.avatarURL)
	.setColor(`RANDOM`)
	message.channel.send({ embed });
}

module.exports.help = {
	name: "bork",
}
