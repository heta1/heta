module.exports.run = (bot, message, args, discord) => {
  var snekfetch = require('snekfetch')
  snekfetch.post('https://discordbots.org/api/bots/stats')
  .set('Authorisation', process.env.tok)
  .send({ server_count: "1000" })
  .then(() => {
    console.log("Statistiques DBL mises à jour.")
    message.channel.send("Statistiques DBL mises à jour.")
  }).catch(err => console.error(err))
}

module.exports.help = {
  name: "update"
}
