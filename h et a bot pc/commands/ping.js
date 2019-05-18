module.exports.run = (bot, message, args) => {
  message.channel.send({
      embed: {
          color: 3447003,
          author: {
              name: `${bot.user.username}`,
              icon_url: `${bot.user.avatarURL}`
          },
          title: `:ping_pong: Pong!`,
          description: `Hé oui! Je surveille **${bot.users.array().length} Membre ** sur **${bot.guilds.array().length} serveurs**!`,
      },
  }).then((m) =>{
      m.edit({
          embed: {
              color: 3447003,
              author: {
                  name: `${bot.user.username}`,
                  icon_url: `${bot.user.avatarURL}`
              },
              description: `:ping_pong: Pong! Je surveille **${bot.users.array().length} Membre ** sur **${bot.guilds.array().length} serveurs**!`,
              fields: [
                  {
                      name: `Latence du bot:`,
                      value: `\`${m.createdTimestamp - message.createdTimestamp}ms\``,
                      inline: true
                  },
                  {
                      name: `:heartpulse: Vie du Bot:`,
                      value: `\`${Math.round(bot.ping)}ms\``,
                      inline: true
                  }
              ],
              footer: {
                text: `je suis en vie depuis ${Math.round(bot.uptime / (1000 * 60 * 60))} jours, ${Math.round(bot.uptime / (1000 * 60)) % 60}  minutes, & ${Math.round(bot.uptime / 1000) % 60} seconds ! ツ`
              }
          },
      })
  })
}

module.exports.help = {
  name: "ping",
  usage: ``,
  information: ""
}
