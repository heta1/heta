const Discord = require('discord.js');
const config = require('../config.json');
const errors = require('../util/errors.js');

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());
  if (!user) return errors.invalidUser(message);

  let kickable = user.kickable ? "✅" : "❎";
  let bannable = user.bannable ? "✅" : "❎";
  let icon = user.user.displayAvatarURL;

  let nickname = user.nickname;
  if (nickname) {
    nickname = user.nickname;
  } else {
    nickname = 'None'
  };

  let createdAtRaw = user.user.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let joinedAtRaw = user.joinedAt.toDateString();
  let joinedAt = joinedAtRaw.split(" ");

  let playingStatus = user.presence.game;
  if (playingStatus) {
    playingStatus = user.presence.game.name;
  } else {
    playingStatus = 'None'
  }

  let embed = new Discord.RichEmbed()
  .setTitle(`Information about ${nickname}`)
  .setColor(config.red)
  .setThumbnail(icon)
  .addField("Nom d'utilisateur", user.user.tag, true)
  .addField('Surnom', nickname, true)
  .addField("Identifiant d'utilisateur", user.id, true)
  .addField('Statut', user.presence.status, true)
  .addField('Statut de lecture', playingStatus, true)
  .addField('Compte créé le', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('A rejoint cette guilde sur', `${joinedAt[0]} ${joinedAt[2]} ${joinedAt[1]} ${joinedAt[3]}`, true)
  .addField('Bannable', bannable, true)
  .addField('Kickable', kickable, true);
  message.channel.send(embed);
  return
};

module.exports.help = {
  name: 'userinfo',
  description: 'Displays information about the user.',
  usage: 'userinfo [@user]'
}