const discord = require('discord.js');
const config = require(`../config.json`);


function sendAnnounce(bot, message, args, guild) {
  var sendChannel = "";
  if (config.donotAnnounce.includes(guild.id)) return message.channel.send(`ðŸ—³Échec de l'envoi de l'annonce à${guild.name} (Dans la liste)`).then(m => m.delete(20000));
  
  if (guild.channels.find("name", "📢annonce-📢")) {
    sendChannel = guild.channels.find("name", "📢annonce-📢");
  } else if (guild.channels.find("name", "général")) {
    sendChannel = guild.channels.find("name", "général");
  } else if (guild.channels.find("name", "🌎discussion🌍")) {
    sendChannel = guild.channels.find("name", "🌎discussion🌍");
  } else if (guild.channels.find("name", "announcements")) {
    sendChannel = guild.channels.find("name", "announcements");
  }

  let announce = new discord.RichEmbed()
    .setColor("7289DA")
    .setAuthor(`${bot.user.username} Annonce`)
    .setDescription(`**Bonjour à toi ici, le créateur de Bender veut juste que vous sachiez, **\n${args.join(' ')}\n\n**Ce message a été envoyé à  *${guild.name}* exprès du créateur.**\n*Ce système d'annonce ne sera pas spammé beaucoup.*`)
    .setFooter(`Une annonce officielle du Dev : (LaBanane).`, bot.user.avatarURL)
    .setTimestamp();

  if (sendChannel !== "") {
    sendChannel.send({ embed: announce })
      .then(() => {
        message.channel.send(`Envoyé à ${guild.name}`).then(m => m.delete(20000));
      })
      .catch(err => {
        message.channel.send(`Échec de l'envoi de l'annonce à ${guild.name} (Send Error)`).then(m => m.delete(20000));
      });
  } else {
    message.channel.send(`Échec de l'envoi de l'annonce à ${guild.name} (Aucun salon)`).then(m => m.delete(20000));
  }
}
module.exports.run = (bot, message, args) => {
  //return; // SOON
  let announceTest = new discord.RichEmbed()
    .setColor("7289DA")
    .setAuthor(`Test Annonce`, bot.user.avatarURL)
    .setDescription(`**Bonjour toi ici,j'envoie juste une annonce ...**\n${args.join(' ')}\n\n**Ce message a été envoyé à  *${message.guild.name}* De mon créateur.**\n*Ce système d'annonce ne sera pas spammé beaucoup.*`)
    .setFooter(`Exemple de réponse avec yes à envoyer à tous les serveurs!`)
    .setTimestamp();

  message.channel.send({ embed: announceTest })
    .then((m) => {
      message.channel.awaitMessages(response => response.content.toLowerCase() === 'yes', {
          max: 1,
          time: 10000,
          errors: ['time'],
        }).then((collected) => {
          m.delete();
          collected.first().delete();
          message.channel.send(`Maintenant, envoyer une annonce à chaque membre de la guilde! [${bot.guilds.array().length} guilds]`).then(m => m.delete(10000));
          bot.guilds.forEach((guild, id) => {
            sendAnnounce(bot, message, args, guild);
          });
        })
        .catch(() => {
          message.channel.send(`Annonce annulé`).then(m => m.delete(5000));
          m.delete();
        });
    });
};

module.exports.help = {
  name: "annonce"
}
