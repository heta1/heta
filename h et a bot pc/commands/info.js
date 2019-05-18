const pkg = require('../package.json')

module.exports.run = (bot, message, args) => {
  var msgArray = []; 
  msgArray.push(`Bonjour, je suis ${bot.user.username} version ${pkg.version}, un bot Discord fonctionnant sous NodeJS version 8.\n\n`);
  msgArray.push(`Ma date de création est août 2018.\n`)
  msgArray.push(`**(info du créateur)** => Je suis actuellement en cours d'apprentissage de Java-Script Discord .\n`);
  msgArray.push(`Les développeurs de mon code source sont <@459914367203278859> et Anthony Graviere. \n`);
  msgArray.push(`Pour voir ce que je peux faire, utilisez ^Help . \n`);
  msgArray.push(`Ma méthode d’invocation utilise des préfixes, actuellement, je ne réponds qu’aux messages commençant par ^`);
  message.channel.send(msgArray)
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "Je vais vous dire quelques informations sur moi-même."
}
