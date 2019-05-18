module.exports.run = (bot, message, args, discord) => {
  let id = args.join(' ');
  let member = bot.fetchUser(id).then(user => {
    message.guild.unban(user.id).catch(err => {
      message.channel.send(`Impossible de unban ${user.username}`)
    })
    message.channel.send(`Bon, j'ai unban  ${user.username}.`)
  }).catch(() => message.channel.send("Désolé, je ne peux pas trouver un utilisateur avec cet identifiant ..."))
}
  

module.exports.help = {
  name: "unhackban"
}
