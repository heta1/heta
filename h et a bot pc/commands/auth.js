

module.exports.run = (bot, message, args, discord) => {
	var gid = message.guild.id
	if (message.member.roles.find('name', 'Autorisé')){
		let em = new discord.RichEmbed()
		.setTitle(`${message.author.username}#${message.author.discriminator}`)
		.setDescription("Ne peut pas être autorisé")
		.addField("Reason:", "L'utilisateur est déjà autorisé!")
		.setThumbnail(message.author.displayAvatarURL)
		.setColor(`#FF0000`)
		.setTimestamp()
		.setURL("")
		.setFooter('Déjà autorisé!');
		
		message.channel.send({embed: em});
		return
	}
	if (!message.guild.me.hasPermission("MANAGE_ROLES")) {message.channel.send('Impossible de créer un rôle dû à "Aucune permission" MANAGE_ROLES!'); return;}
	if (!message.guild.roles.find('name', "Autorisé")){
		
		message.guild.createRole({
			name: 'Autorisé',
			color: 'GREEN',
			position: 0
		}, "Je n'ai pas trouvé ce rôle alors je l'ai fait!")
		.then (role => {
		if (message.guild.roles.find('name', 'Autorisé').comparePositionTo(message.guild.me.highestRole) > 0) {
			let em = new discord.RichEmbed()
			.setTitle(`${message.author.username}#${message.author.discriminator}`)
			.setDescription("Ne peut pas être autorisé")
			.addField("Reason:", `Le rôle "Autorisé" est supérieur à mon rôle!`)
			.setThumbnail(message.author.displayAvatarURL)
			.setColor(`#FF0000`)
			.setTimestamp()
			.setURL("")
			.setFooter('ERREUR');

			message.channel.send({embed: em});
			return;
			};
		message.member.addRole(message.guild.roles.find('name', 'Autorisé'), "User has been authorized with AuthBot!")
		let em = new discord.RichEmbed()
			.setTitle(`${message.author.username}#${message.author.discriminator}`)
			.setDescription("Vous êtes maintenant autorisé")
			.setThumbnail(message.author.displayAvatarURL)
			.setColor(`#00FF00`)
			.setFooter(`Maintenant autorisé sur ${message.guild.name}`)
			.setURL("")
			.setTimestamp();
	
			message.channel.send({embed: em});
			return;
		});
	}
	if (!message.guild.roles.find('name', "Autorisé")){
		console.log("Impossible de créer un rôle!")
		return;
	};
	if (message.guild.roles.find('name', 'Autorisé').comparePositionTo(message.guild.me.highestRole) > 0) {
		let em = new discord.RichEmbed()
		.setTitle(`${message.author.username}#${message.author.discriminator}`)
		.setDescription("Vous êtes maintenant autorisé")
		.addField(`Reason:", "Le rôle "Autorisé" est supérieur à mon rôle!`)
		.setThumbnail(message.author.displayAvatarURL)
		.setColor(`#FF0000`)
		.setTimestamp()
		.setURL("")
		.setFooter('ERREUR');
		
		message.channel.send({embed: em});
		return;
		}
	message.member.addRole(message.guild.roles.find('name', 'Autorisé'), "L'utilisateur a été autorisé avec AuthBot!")
	let em = new discord.RichEmbed()
		.setTitle(`${message.author.username}#${message.author.discriminator}`)
   	 	.setDescription("Vous êtes maintenant autorisé")
		.setThumbnail(message.author.displayAvatarURL)
    		.setColor(`#00FF00`)
		.setFooter(`Maintenant autorisé sur ${message.guild.name}`)
		.setURL("")
		.setTimestamp();
	
	message.channel.send({embed: em});
}

module.exports.help = {
	name: "auth"
}
