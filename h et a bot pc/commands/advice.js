module.exports.run = (bot, message, args, discord) => {
  require('request')('http://api.adviceslip.com/advice', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      message.channel.send(`**Conseil:**\n\n ${JSON.parse(body).slip.advice}`)
    } else {
      message.channel.send(`**Conseil:**\n Je ne pouvais penser à aucun conseil ...`)
    }
  });
}

module.exports.help = {
  name: "advice",
  usage: ``,
  information: "Je vais vous donner de bons conseils, je suis juste trop gentil."
}
