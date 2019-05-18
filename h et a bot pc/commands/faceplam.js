module.exports.run = async (bot, message, args, discord) => { 
const { MessageAttachment } = require("discord.js");
const Idiot = require("idiotic-api");
bot.API = new Idiot.Client("", {dev: true});
const facepalm = async () => {
 await message.channel.send(new MessageAttachment(
 await client.API.facepalm(message.mentions.users.first().displayAvatarURL({ format: "png", size: 128 })),
 "facepalm.png"));
};
facepalm();
}
module.exports.help = {
	name: "facepalm",
}
