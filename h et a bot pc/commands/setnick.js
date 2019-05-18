module.exports.run = (bot, message, args, discord) => {
  if (message.author.id == process.env.oid) {
  let newname = args.join(' ')
  bot.user.setUsername(newname)
  
  message.channel.send(`OK, je mets mon nom d'utilisateur à ${newname}!`).then(m => {
    message.delete(100)
    m.delete(100)
  })
  } else {
    message.channel.send("Nan!")
  }
}

module.exports.help = {
  name: "setnick"
}
