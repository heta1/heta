module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  message.channel.send(`Hey!`)
  console.log(`LOL! ${member.username} été traqué par ${message.author.username}`)
  console.log(`ID: ${member.id}`)
}

module.exports.help = {
  name: "troll"
}
