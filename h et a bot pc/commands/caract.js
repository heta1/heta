 module.exports.run = async (bot, message, args , discord) => {
 

        let contenttoconvert = message.content.substr(7)
        if (contenttoconvert){
        var ctclenght = contenttoconvert.length
        message.channel.send('Votre message fait'+ctclenght+' caracteres.')
        }else{
message.reply("Merci d'entrer un message  !" )
}

}

module.exports.help = {
  name: "caract"
}