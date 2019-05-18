module.exports.run = (bot, message, args, discord) => {
  if (message.channel.type == "dm") {
    message.channel.send("Il n'y a pas de guilde à partir de laquelle on peut obtenir l'identité!")
  } else {
  message.channel.send(`Server ID: ${message.channel.guild.id}`)
  }
}

module.exports.help = {
  name: "serverid"
}
