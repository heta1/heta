const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("non du serveur", message.guild.name)
    .addField("Crée le", message.guild.createdAt)
    .addField("vous avez rejoint", message.member.joinedAt)
    .addField("Total membre", message.guild.memberCount);

    message.channel.send(serverembed);
}

module.exports.help = {
  name:"serveurinfo"
}