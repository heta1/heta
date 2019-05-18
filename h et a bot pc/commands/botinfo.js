const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("non du bot ", bot.user.username)
    .addField("Crée le", bot.user.createdAt);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}