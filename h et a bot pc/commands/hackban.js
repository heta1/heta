module.exports.run = (bot, message, args, discord) => {
  let mid = args.join(' ');
  
    bot.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send("Échec de l'interdiction d'utilisateur "+id)
        console.log(err)
      })
      message.channel.send(`Bon, j'ai banni l'utilisateur ${id}.`)
    }).catch(() => {
      message.channel.send(`Il n'y a pas d'utilisateur avec l'ID suivant ${mid},Veuillez réessayer. :face_palm:`)
    })
}

module.exports.help = {
  name: "hackban"
}
