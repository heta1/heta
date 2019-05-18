const BMA = require('../config.json').BMA
const BCO = require('../config.json').BCO
const OID = "459914367203278859"

const mainroles = [BMA, BCO, OID]

module.exports.run = (bot, message, args) => {
  if (message.author.id == BCO) {
  message.author.send(`Vos autorisations sont de niveau copropriétaire! Vous avez des permissions complètes.`)
  }
  if (message.author.id == BMA) {
    message.author.send(`Vos autorisations sont du niveau Admin principal! Vous avez des permissions complètes.`)
  }
  if (message.author.id == "459914367203278859") {
    message.author.send(`Vous etes le propriétaire! Bonjour mon créateur!`)
  }
  if (!message.author.id == mainroles) {
    message.author.send(`Vous avez les permissions de membre.`)
  }
}

module.exports.help = {
  name: "perms"
}
