const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
module.exports.run = async (bot ,args , message , discord ) => {

   
   
    if (!args[0]) {
   return message.reply(" Vous devez fournir une équation à résoudre sur la calculatrice ")
    
   }
    const question = args.join(' ');

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        throw `Invalid equation: ${err}`;
    }

    message.delete();
    
    let embed = new discord.RichEmbed()
	.setTitle(`**__             Math              __**`)
	.setDescription(` **Equation:**\n\`\`\`    ${question}      \`\`\` **Reponse:**\n\`\`\`\n ${answer} \`\`\``)
	.setThumbnail(bot.user.avatarURL)
	.setColor(`RANDOM`)
	message.channel.send({ embed });
              
    
};

module.exports.help = {
    name: 'calculate',
    description: 'Calculates any math equation'
};