const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let defineduser = message.mentions.users.first();
  let user = message.author
  message.delete();
  if(!args[1]){return message.reply("**S'il vous plaît spécifier une raison de pousser.**")}
  if (!args[0]) {return message.reply(`**S'il vous plaît spécifier un utilisateur que vous souhaitez pousser.**`)}
  else{             
  let reason = args.join(" ").slice(22);    
  let Embed = new Discord.RichEmbed()
   .setTitle('Poke 👉')
   .addField('Vous venez de vous faire fourrer.', `par: ${user}`, true)
   .addField('Reason', reason, true)
   .setColor(0xD4AF37)
    defineduser.send(Embed)
    message.channel.send("<:tickYes:432418492889694210> **| Ce membre a été fourré.**")
                  }
}

module.exports.help = {
    name: "poke"
}