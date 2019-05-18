module.exports.run = (bot, message, args) => {
  let channel = message.channel
  
  channel.send("Voila mon histoire https://www.youtube.com/watch?v=isk_YGBdv28.")
}

module.exports.help = {
  name: "stream",
  usage: ``,
  info: "La vie de Bender"
}
 
