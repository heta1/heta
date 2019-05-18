module.exports.run = (bot, message, args) => {
  require('request')('http://api.yomomma.info/', function(error, response, body) {
	if (!error && response.statusCode == 200) {
	  message.channel.send(`**YoMomma:**\n\n${JSON.parse(body).joke}`)
    } else {
      message.channel.send(`**YoMomma:**\n\n Je ne pouvais pas penser à une blague de yomomma ...`)
    }
  });
}

module.exports.help = {
  name: "yomomma",
  usage: ``,
  information: "Je vais te faire une blague au hasard."
}

module.exports.settings = {
  permission: "All",
  deleteresponder: true,
  category: "Fun"
}
