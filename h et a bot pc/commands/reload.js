module.exports.run = (bot, message, args, discord) => {
    let cmd = args.join(" ")
    if (!args) {
    message.channel.send("Vous devez fournir un nom de commande à recharger.")
} else {
      delete require.cache[require.resolve(`./${cmd}.js`)]
      message.channel.send(`Commande ${cmd}  a été rechargé.`)
    }
}

module.exports.help = {
    name: "reload"
}
