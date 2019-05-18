let oid = "459914367203278859"

module.exports.run = (bot, message, args, discord) => {
    var mes = args.join(' ')
    let embed = new discord.RichEmbed()
    .setTitle(`Système de contact`)
    .setDescription(mes)
    .setColor(`BLUE`)
    .setFooter(`Ce message a été envoyé par ${message.author.tag}`)
    .setThumbnail(bot.user.avatarURL)
    bot.users.get(oid).send({ embed })
}

module.exports.help = {
    name: "contact"
}
