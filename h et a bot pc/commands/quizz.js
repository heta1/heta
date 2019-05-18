const Discord = require('discord.js');
const quiz = [
  { q: "De quelle couleur est le ciel?", a: ["pas de couleur", "invisible"] },
  { q: "Nommez une marque de boisson gazeuse.", a: ["pepsi", "coka", "rc", "7up", "sprite", "mountain dew"] },
  { q: "Nommez un langage de programmation.", a: ["actionscript", "coffeescript", "c", "c++", "basic", "python", "perl", "javascript", "dotnet", "lua", "crystal", "go", "d", "php", "ruby", "rust", "dart", "java", "javascript"] },
  { q: "Qui est un bon garçon?", a: ["tu es", "moi"] },  
  { q: "Qui m'a créé?", a: ["LaBanane", "labanane"] },
  { q: "En quel langage de programmation ai-je créé?", a: ["javascript",] },
  { q: "Nomme la septième planète du soleil.", a: ["uranus"] },
  { q: "Nommez la plus grande île du monde.", a: ["groenland",] },
  { q: "Nomme la plus longue rivière du monde?", a: ["amazon", "la rivière Amazone"] },
  { q: "Nommez le plus grand océan du monde.", a: ["pacifique", "océan Pacifique"] },
  { q: "Nommez l'une des trois couleurs primaires.", a: ["bleu", "rouge", "jaune"] },
  { q: "Combien de couleurs y a-t-il dans un arc-en-ciel?", a: ["7", "sept"] },
  { q: "Comment appelez-vous une période de mille ans?", a: ["millénaire"] },
  { q: "Combien de carrés y a-t-il sur un échiquier?", a: ["64", "soixante-quatre"] },
  { q: "Combien de degrée sont trouvés dans un cercle?", a: ["360", "360 degrée", "Trois cent soixante"] },
  { q: "Le système Dewey Decimal est utilisé pour classer quoi?", a: ["livre" ,"les livres "] },
  { q: "Combien de points a une boussole?", a: ["32", "trente deux"] },
  { q: "Combien de cordes a un violoncelle?", a: ["4", "quatre"] },
  { q: "Combien de symphonies Beethoven a-t-il composées?", a: ["9", "neuf"] },
  { q: "Combien de lignes un limerick doit-il avoir?", a: ["5", "cinq"] },
  { q: "Quelle est la langue la plus basique de Microsoft?", a: ["visual basic"] },
  { q: "Quelle est la langue la plus compliquée?", a: ["binaire"] },
  { q: "'L'abréviation informatique de l'OS signifie généralement?", a: ["opérateur système"] }
];
const options = {
  max: 1,
  time: 300000,
  errors: ["temps"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Bonne réponse: \`${winnerMessage.content}\``)
                                 .setFooter(`Question: ${item.q}`)
                                 .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor("Personne n'a la réponse à temps!")
                                 .setTitle(`Réponses correctes: \`${item.a}\``)
                                 .setFooter(`Question: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "quiz"
}