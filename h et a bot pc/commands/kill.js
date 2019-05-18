module.exports.run = (bot, message, args, discord) => {


let member = message.mentions.members.first();
	if(!member) return message.channel.send("Vous devez mentionner quelqu'un.");
	let embed = new discord.RichEmbed()
	.setTitle(`kill!`)
	.setImage(`https://data.photofunky.net/output/image/e/7/b/5/e7b5c3/photofunky.gif`)
	.setDescription(`${message.author}  tu vien de tuer killed  <@${member.id}> `)
	.setThumbnail(bot.user.avatarURL)
	.setColor(`RANDOM`)
	message.channel.send({ embed });

}
module.exports.help = {
	name: "kill",
}