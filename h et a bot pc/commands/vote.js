module.exports.run = async (bot, message, args, discord) => { 
if (message.channel.nsfw === true) {
    const { get } = require('superagent')
      .get('https://discordbots.org/api/bots/365958655926992896/check')
      .set('Authorisation', '') 
      .query({ userId: message.author.id })
      .end((err, res) => {
        console.log(res.body.voted);
        var check = res.body.voted;
        if (check == 1) {
          const { get } = require('superagent')
         .get('https://nekobot.xyz/api/image')
         .query({ type: 'pgif' }) 
         .end((err, res) => {
          message.channel.send(res.body.message)
         });
        } else {
          message.channel.send({embed: {
            title: "Commande uniquement des votants",
            url: "bientot",
            description: "Cette commande est disponible uniquement pour les votants",
            fields: [{
                name: "Allez voter à",
                value: "bientot"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "Status: 403"
            }
          }
          });
        }
    });
    } else {
      message.channel.send({embed: {
          description: "ce n'est pas le canal NSFW!"
      }})
    }
}
module.exports.help = {
	name: "pgif",
}
