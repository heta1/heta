const superagent = require("snekfetch");

module.exports.run = async (bot, message, args, discord) => { 
    superagent.get('http://random.birb.pw/tweet/')
        .end((err, response) => {
          message.channel.send({ file: `https://random.birb.pw/img/${response.body}` });
        });
}

module.exports.help = {
	name: "bird",
}
