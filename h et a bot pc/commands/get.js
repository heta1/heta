const snekfetch = require('snekfetch');

module.exports.run = async(bot, message, args ,) => {
  let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["La réussite obtenue!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("brûler")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("biscuit")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("gâteau")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit("Longueur maximale: 22 caractères. Soz.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete();

}
module.exports.help = {
	name: "get"
}