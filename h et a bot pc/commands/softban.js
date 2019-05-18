module.exports.run = (bot, message, args, discord) => {
  let member = message.mentions.members.first();
  let reason = args.join(' ');
  if (member.displayName) {
    member.ban(reason)
    message.channel.send(`D'accord, j'ai softban${member.displayName}!`).then(m => m.delete(5000))
    message.guild.unban(member.id)
  } else {
    member.ban(reason)
    message.channel.send(`Bon, je viens de softban ${member.username}!`).then(m => m.delete(5000))
    message.guild.unban(member.id)
  }
}

module.exports.help = {
  name: "softban"
}
