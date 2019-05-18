const cheerio = require('cheerio');
const snekfetch = require('snekfetch');
const querystring = require('querystring');

module.exports.run = (bot, message, args) => {
  if (!args[0]) {
    message.channel.send(`:x: Vous avez besoin d'un article pour une recherche google.`);
    return;
  }

  let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(args.join(' '))}`;
  message.channel.send(`Recherche Google pour ${args.join(' ')}...`).then(m => m.delete(2500))
  return snekfetch.get(searchUrl).then((result) => {

    // Cheerio lets us parse the HTML on our google result to grab the URL.
    let $ = cheerio.load(result.text);
    let googleData = $('.r').first().find('a').first().attr('href');

    googleData = querystring.parse(googleData.replace('/url?', ''));
    message.channel.send(`Résultats trouvés sur google pour ${args.join(' ')}:\n${googleData.q}`)

  }).catch((err) => {
    message.channel.send(`Aucun résultat trouvé sur google pour ${args.join(' ')}...`)
  });
}

module.exports.help = {
  name: "google",
  usage: `(string)`,
  information: "Let's search google!"
}
