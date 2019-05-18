module.exports.run = (bot, message, args, discord) => {
if (message.author.id == process.env.oid) {
  if (args.join(' ').startsWith('https://')) {
    bot.user.setAvatar(args.join(' '));
    message.channel.send(`Définir mon avatar sur ${args.join(' ')}!`);
  } else {
    message.channel.send("Le fichier d'avatar doit provenir d'une URL ...").then(m => {
      message.delete(100);
      m.delete(1000);
    })
  }
  } else {
    message.channel.send("Nan!")
  }
}

module.exports.help = {
  name: "setavatar"
}
