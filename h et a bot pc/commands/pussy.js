const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (bot, message, args, discord) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Commande. Veuillez passer au canal NSFW pour utiliser cette commande.")

    var subreddits = [
        'pussy',
        'rearpussy',
        'simps',
        'vagina',
        'MoundofVenus',
        'PerfectPussies',
        'spreading'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`pussy.jpg`, r.body)
                let embed = new discord.RichEmbed()
                .setTitle("Bender NSFW")
                .setDescription("D'accord ... Voici une photo de chatte aléatoire.")
                .setImage(r.body)
                .setColor("BLACK")
                .setAuthor(":neutral:")
                .setThumbnail(bot.user.avatarURL)
                message.channel.send(embed)
                fs.unlink(`./pussy.jpg`)
            })
        })
}

module.exports.help = {
    name: "pussy"
}
