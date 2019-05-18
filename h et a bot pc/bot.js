/** jshint -W038z8  */

// Discord init  
const keyhowareya = "heyhowareya",
time = Date(),
stitch = require("mongodb-stitch"),
fs = require("fs");
pak = require('./package.json'),
discord = require('discord.js'),
config = require('./config.json'),
profanities = require("./profanities.json"),
bot = new discord.Client(),
prefix = "^",
{baselogger} = require('./logger.js'),
result = Math.round(Math.random()),
updates = ["Rebuffed Hackban where it'll now reject any number that is not a valid ID."]
config.updates = updates.join(' ')
var filteron = "false",
cleverbot = require('cleverbot.io'),
cb = new cleverbot("sMNApmkOjMlZRlPZ", "gskxw3JBqEVGIAboBjOnvyTf8awM1MbS")
// End of init

bot.invite = "https://discord.gg/qEFNkxB"

// Gather commands
bot.commands = new discord.Collection();

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Le chargement de la commande a échoué!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
  require('./util/poststats.js')(bot)
  require('./util/consoles.js')(bot, config)
  bot.user.setActivity("Loading Bender...", {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  
  setTimeout(() => {
    bot.user.setActivity(` ^help | ${bot.guilds.array().length} servers`, {type: "WATCHING"});
  }, 20000)

  bot.guilds.forEach((guild, id) => {
    console.log(`[SERVER] [${guild.memberCount}] ${guild.name} (${guild.id}) | Joined: ${guild.joinedAt.toString()}\n`)

  });
});
bot.on("guildMemberAdd", (member) => require('./events/guildMemberAdd.js')(bot, member))
bot.on("guildMemberRemove", (member) => require('./events/guildMemberRemove.js')(bot, member))
bot.on("guildBanAdd", (guild, member) => require('./events/BanAdd.js')(bot, guild, member))
//bot.on("guildBanRemove", (guild, member) => require('./events/BanRemove.js')(bot, guild, member))
 
bot.on("message", message => {
  if (filteron == "true") {
    for (x = 0; x < profanities.length; x++) {
      if (message.cleanContent.toLowerCase().includes(profanities[x].toLowerCase())) {
        console.log(`[Profanity] ${message.author.username}, said ${profanities[x]} in the ${message.channel.name} channel!`);
        message.channel.send(`<@${message.author.id}>, LANGUAGE!`).then(m => m.delete(10000));
        message.delete(500);
        return;
      }
    }
  }
  if (!message.content.startsWith(prefix)) return;
  if (message.channel.type == "dm") return;

  let mArray = message.content.split(" ");
  let args = mArray.slice(1);

  let cmd = bot.commands.get(mArray[0].slice(prefix.length));
  if (message.author.bot) return;

  if (cmd) {
    
      if (config.userblacklist.includes(message.author.id)) return;
        cmd.run(bot, message, args, discord);  
        console.log(message.author.username + " used the " + message.content.split(" ")[0] + " command.");
        if (message.guild.id == "427846834225020928") {
        return;
    } else {
        baselogger(bot, `**Command Run**\n\n**Command:** ${message.content.split(" ")[0]}\n**User:** ${message.author.tag}\n**Message:** ${message.content}\n**Guild:** ${message.guild.name}\n**Channel:** ${message.channel.name}`);
    }
  } 

  
  

});

bot.on("message", (message, err) => {
  if (message.content == prefix) {
    let channel = message.channel;
    
    channel.send("Désolé, ce n'est pas une commande. :stuck_out_tongue:").then(m => m.delete(1000));
  }
  if (message.content == prefix + "filteroff") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "false";
      message.channel.send("Ok, j'ai éteint mes filtres!");
      console.log(`${message.author.tag} éteint les filtres.`);
    } else {
      return message.channel.send("Désolé, vous ne disposez pas des autorisations requises!");
    }
  }
  if (message.content == prefix + "filteron") {
    // Prevents Unauthorized Users from accessing filters
    if (message.member.hasPermission("MANAGE_GUILD")) {
      filteron = "true";
      message.channel.send("Ok, j'ai retourné mes filtres!");
      console.log(`${message.author.tag} tourné les filtres.`);
    } else {
      return message.channel.send("Désolé, mais vous ne disposez pas des autorisations requises.");
    }
    if (message.content == prefix + "coinflip") {
      if (result) {
    message.channel.send("**Coin Flip:**\nLa pièce a atterri sur les face.");
      }
      else {
        message.channel.send("**Coin Flip:***\nLa pièce a atterri sur les pile");
}}}
  if (message.content.toLowerCase().includes("Love Bender")) {
    message.channel.send("ERMAHGERD");
  }
  if (message.content.includes(`<@475673658971652109>`)) {
      let embed = new discord.RichEmbed()
      .setTitle("Bender pour débutants")
      .setDescription("OUAIP! C'est moi, Bender! Pour plus d'informations sur moi, utilisez la commande info. (^ info)")
      .setColor("PURPLE")
      .setThumbnail(bot.user.avatarURL)
      .setTimestamp()
   message.channel.send({embed: embed})
  }
  
 });
      
bot.on("guildCreate", (guild) => {
  require('./mysql.js')(bot, guild)
  require('./events/guildCreate.js')(bot, guild, discord)
  baselogger(bot, `**Guild Join**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.tag}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("guildDelete", (guild) => {
  require('./mysql2.js')(bot, guild)
  require('./events/guildDelete.js')(bot, guild, discord)
  baselogger(bot, `**Guild Leave**\n\n**Guild:** ${guild.name}\n**Owner:** ${guild.owner.user.tag}\n**Large:** ${guild.large}\n**Member Count:** ${guild.memberCount}\n\n**Total Guilds:** ${bot.guilds.array().length}`, guild.iconURL);
});

bot.on("message", async message => {
  
  const botconfig = require("./botconfig.json");
  let purple = botconfig.purple;
  let xp = require("./XP.json");
  let coins = require("./coins.json");
 
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#0000FF")
  .addField("💸", `Tu vien de recevoir ${coinAmt} !`);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;   
	let level = new discord.RichEmbed() 
  .setAuthor(message.author.username , "**Tu vien de passer un level toute mes félicitation**")
  .setColor(purple)
  .addField(message.author.displayAvatarUR , "Tu est desormais level " , curlvl + 1 ,"!");
  message.channel.send({ level });
  }
  fs.writeFile("./XP.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  


var command = message.content.split(' ')
    const args = message.content.slice(prefix.length).split(/ +/)
    command = args.shift().toLowerCase()
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapters = new FileSync('database.json')
const db = low(adapters)
db.defaults({money: [], bvn: []}).write()


if (command === "setbvn"){
  if (db.get("bvn").find({guild: message.guild.id}).value()) return message.channel.send("Channel déjà défini")

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les droits")

  db.get("bvn").push({guild: message.guild.id, channel: message.channel.id, channelname: message.channel.name, guildname: message.guild.name}).write()
  message.channel.send(`Définition du channel bvn réussit : **${message.channel.name}** défini comme channel de bvn`)
}
if (command === "rbvn"){
  if (!db.get("bvn").find({guild: message.guild.id}).value()) return message.channel.send("Channel non défini")

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les droits")
  let channe = db.get("bvn").filter({guild: message.guild.id}).find('channel').value()
  let channeUs = Object.values(channe)
  db.get("bvn").remove({guild: message.guild.id, channel: channeUs[1], guildname: channeUs[3], channelname: channeUs[2]}).write()
  message.channel.send("Nous venons d'enlever votre setbvn !")
}
bot.on("guildMemberAdd", member => {

  if (!db.get("bvn").find({guild: member.guild.id}).value()) return
  let channe = db.get("bvn").filter({guild: member.guild.id}).find('channel').value()
  let channeBvn = Object.values(channe)
  let channel = member.guild.channels.find("id", channeBvn[1])
  let embed = new discord.RichEmbed()
  .setTitle(`Nouveau joueur : ${member.user.tag}`)
  .setDescription(`**${member.user.tag}** vient de rejoindre **${member.guild.name}** ! Bienvenue à lui !`)
  .setColor(purple)
  .setThumbnail(member.user.displayAvatarURL)
  .setFooter(`Nouveau joueur`, member.user.displayAvatarURL)
  message.channel.send(embed)
})

})


bot.login(process.env.TOKEN); 
