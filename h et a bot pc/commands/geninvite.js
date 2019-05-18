module.exports.run = (bot, message, args, discord) => {
  
  if (message.author) {
    let guildid = args.join(' ');
    message.channel.createInvite().then(inv => bot.users.get(process.env.oid).send(inv.code))
    } else {
      message.channel.send("Nan!")
    }
  }
  
  module.exports.help = {
    name: "geninvite"
  }
  
  
  module.exports.help = {
    name: "geninvite"
  }
  
module.exports.help = {
  name: "geninvite"
}
