let coins = require("../coins.json");
  const fs = require('fs')
  const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!coins[message.author.id]){
        coins[message.author.id] = {
          coins: 0
        };
    }
    
      let coinAmt = Math.floor(Math.random() * 150) + 1;
    
        coins[message.author.id] = {
          coins: coins[message.author.id].coins + coinAmt
        }
      fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
      
      let coinEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#0000FF")
      .addField("💸", `Tu vien de recevoir ${coinAmt} piéce !`);
    
      message.channel.send(coinEmbed).then(msg => {msg.delete(10000)});
      
   })  
}
        
module.exports.help = {
    name: "work"
}