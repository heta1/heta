module.exports.run = (bot, message, args, discord) => {
  let num = Math.floor(Math.random()*1000)
  let num2 = Math.floor(Math.random()*num)
  let member = message.mentions.members.first();
  if(!member) return message.channel.send("Vous devez mentionner quelqu'un.");
  let embed = new discord.RichEmbed()
  .setTitle("Bender Roasting")
  .setDescription(`${member.displayName} a un ${num2}% chance d'échouer dans la vie.`)
  .setFooter(`${member.displayName} got roasted by ${message.member.displayName}!`)
  .setThumbnail(`https://i.imgur.com/6Bzv6Wv.png`)
  .setAuthor(`Bender`)
  .setColor("RANDOM")
   
  message.channel.send({ embed })
}

module.exports.help = {
  name: "roast"
}
