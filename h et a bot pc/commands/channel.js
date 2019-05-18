module.exports.run = async (bot, message, args , discord) => {


    const data = client.channels.get(message.channel.id);
    moment.locale("fr");
    var temps = moment(data.createdTimestamp).format("LLLL");
    con(temps)
    message.reply("\n" + "```javascript"+ "\n" + "Nom du channel: " + data.name + "\n" + "Type de channel: " + data.type + "\n" +
    "Channel id: " + data.id + "\n" + "Topic: " + data.topic + "\n" + "Créer le: " + temps + "```" );
    con("\n" + "**" + "Channel id: " + data.id + "**" );
    con(data);
}
    module.exports.help = {
        name: "infochannel"
      }