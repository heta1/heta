const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../XP.json");

module.exports.run = async (bot, message, args , discord) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

	let embed = new discord.RichEmbed()
	.setTitle(`Tu est level:                 [${curlvl}] \nTon XP est de :          [${curxp}] `)
	.setImage(`https://data.photofunky.net/output/image/5/8/9/8/5898b6/500x200.gif`)
	.setDescription(` ` )
  .setThumbnail(bot.user.avatarURL)
  .setFooter(`Il te reste ${difference}xp à farm pour Up de level ! `, message.author.displayAvatarURL )
	.setColor(purple)
	message.channel.send({ embed });
}

module.exports.help = {
  name: "xp"
}