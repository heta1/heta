module.exports.run = (bot, message, args) => {
  const result = Math.round(Math.random())
  if (message.content.startsWith("^question")) {
    if (result) {
    message.channel.send("Oui!")
  } else {
    message.channel.send("Non.")
  }
}
}

module.exports.help = {
  name: "question"
}
