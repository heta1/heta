module.exports.run = (bot, message, args) => {
  message.channel.send(`Ton ID est : ${message.author.id}`)
}

module.exports.help = {
  name: "myid"
}
