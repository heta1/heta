const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  //message.channel.send("Use this to join the help server: https://discord.gg/XvMA2rJ")
  let guild = bot.guilds.get(`481053904205774860`)
  guild.channels.find("name", "général").createInvite({
   temporary: false, maxAge: 400, maxUses: 1, unique: true})
   .then(invite =>{
      let embed = new discord.RichEmbed()
      .setAuthor(`Bender Invite ✍`, bot.user.avatarURL)
      .setThumbnail(bot.guilds.get(`481053904205774860`).iconURL)
      .setColor(message.guild.me.displayHexColor !='#000000' ? message.guild.me.displayHexColor : "ff3333")
      .setDescription(`
      Oui! Nous avons un super serveur 

[Click ici ](${invite} "Expires dans 5 minutes")
`)
    .setFooter(`Members: ${guild.memberCount}`);
    
  message.channel.send({embed});
    
  });
};

module.exports.help = {
  name: "joinserver"
};
