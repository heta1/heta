module.exports.run = (bot, message, args, suffix, discord) => {
	let au = message.author.id
	let oid = process.env.oid
  let fields = [
    {
      name: ":gear: Prefix:",
      value: `\^\``,
      inline: true
    },
    {
      name: ":hammer_pick: Moderation:",
      value: `mute, unmute, kick, ban, auth, purge, perms, filteroff, filteron, hackban, and unhackban.`,
      value: `\`\`\`ini\nauth = "Vous autoriser !"\nban = "Besoin de ban quelqu'un?"\nfilteron = "Active le filtre de langue!"\nfilteroff = "Désactive le filtre de langue!"\nkick = Besoin de kick quelqu'un ?"\nmute = "Mute quelqu'un dans le chat!"\nunmute = "Unmute quelqu'un dans le chat!"\npurge = "Supprimer les messages du chat!"\nhackban = Besoin de ban quelqu'un qui n'est pas dans votre guilde? Le ban par leur identifiant!"\nunhackban = "Besoin de unban quelqu'un?"\`\`\``,
    },
    {
      name: ":robot: Bot:",
      value: `\`\`\`ini\n@Bender = "Obtenez plus de cette info géniale!"\ninfo = "Obtenez des informations de base sur le bot."\njoinserver = "Rejoignez le serveur Scarlet!"\ninvite = "Voulez-vous inviter le bot?"\nping = "Pong?"\nuptime = "Voyez combien de temps le bot est resté en vie !"\nlistservers = "Voir le nombre d'utilisateurs, de canaux et de guildes du bot."\`\`\``,
    },
           {
      name: ":lollipop: Fun:",
      value: `\`\`\`ini\navatar = "Récupère une image HD d'un utilisateur!"\ngoogle = "Fait une recherche sur google"\nquiz = "Vous donne des qustion"\nuserinfo = "Vous donne l'info de l'utilisateur"\nget = "Vous cherche un idems sur minecraft"\ntranslate = "Traduit un message dans la langue de votre choix"\npoll = "Met 2 reactions sur un message"\nslots = "Machine a sou"\nmétéo = "Vous donne la météo"\nroll = "Vous donne un nombre aléatoire"\n8ball = "Donne une reponse aléatoire"\ncat = "Envoi une photo de chat\nbork = "Bork quelqu'un pour le fun!"\ncoinflip = "Pile ou face!"\nsay = "Tu veux que je dise quelque chose?"\nmyid = "Besoin de votre propre identifiant?"\nserverid = "Besoin de l'identifiant du serveur?"\nyomomma = "YOMOMMA!"\nknockknock = "Je vais vous faire une blague toc."\nadvice = "Je vais vous donner de bons conseils(ANGLAIS), alors appliquez-le à votre vie IRL."\nchucknorris = Je vais vous obtenir une blague au hasard."\`\`\``,
    },
    {
      name: ":musical_note: Music:",
      value: `\`\`\`ini\nplay = "Jouez un lien de chanson / youtube!"\nskip = "Passer la chanson."\ndisconnect = "Déconnectez le bot du canal vocal."\nvolume = "Changer le volume du bot."\nresume = "Reprendre la lecture."\nshuffle = "Ajouté les chansons dans la file d'attente."\nclean = "Nettoie certains messages du bot."\nsearch = "Recherchez une chanson et choisissez de la lire ou non."\nclear = "Effacer la file d'attente."\`\`\``
    },
    {
    name: ":medal: Owner:",
    value: `\`\`\`ini\nshutdown = "Arrêter le bot!"\nchangegame = "Changer le statut de lecture du bot."\neval = "Exécuter du JavaScript depuis Discord!"\nonbot = "Change le statut du bot en ligne!"\nidlebot = "Changer le statut des robots en inactif !"\ndnd = "Modifier le statut du bot en  Ne pas déranger."\ninvbot = "Changez le statut du bot en Invisible!"\ndebug = "Voir des informations avancées sur le bot."\nmshutdown = "Arrêter la partie musique du bot."\nmrestart = "Redémarrez la partie musique du bot."\nsetavatar = "Définir l'avatar du bot"\nsetnick = "Définir le pseudo du bot.."\ngeninvite = "Générer une invitation pour tout serveur dans lequel se trouve le bot."\`\`\``,      
  },
  {
  name: ":underage: NSFW",
  value: `\`\`\`ini\nboobs = "Montre des photo de sein"\nbutt = "Montre des photo de fesse"\`\`\``,   
  },    
  {
   }
  ];
    if (au == oid) {
      fields.push({
        name: ":medal: Owner:",
	value: `\`\`\`ini\nshutdown = "Arrête le Bot!"\nchangegame = "Changer le statut de lecture du bot."\neval = "Exécuter du JavaScript depuis Discord!"\nonbot = "Change le statut du bot en ligne!"\nidlebot = "Changer le statut des robots en inactif !"\ndnd = "Modifier le statut du bot en  Ne pas déranger."\ninvbot = "Changez le statut du bot en Invisible!"\ndebug = "Voir des informations avancées sur le bot."\nmshutdown = "Arrêter la partie musique du bot."\nmrestart = "Redémarrez la partie musique du bot."\nsetavatar = "Définir l'avatar du bot"\nsetnick = "Définir le pseudo du bot."\ngeninvite = "Générer une invitation pour tout serveur dans lequel se trouve le bot."\`\`\``,
        inline: false
      });
    } else {
      fields.pop({
      	name: ":medal: Owner:",
	value: `\`\`\`ini\nshutdown = "Arrêter le bot!"\nchangegame = "Changer le statut de lecture du bot."\neval = "Exécuter du JavaScript depuis Discord!"\nonbot = "Change le statut du bot en ligne!"\nidlebot = "Changer le statut des robots en inactif !"\ndnd = "Modifier le statut du bot en  Ne pas déranger."\ninvbot = "Changez le statut du bot en Invisible!"\ndebug = "Voir des informations avancées sur le bot."\nmshutdown = "Arrêter la partie musique du bot."\nmrestart = "Redémarrez la partie musique du bot."\nsetavatar = "Définir l'avatar du bot"\nsetnick = "Définir le pseudo du bot.."\ngeninvite = "Générer une invitation pour tout serveur dans lequel se trouve le bot."\`\`\``,
	inline: false
      });
    };
  message.channel.send({
    embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Help Message!",
    url: "",
    fields: fields,
    timestamp: new Date(),
    footer:{
      icon_url: bot.user.avatarURL,
      text: ""
    }
  }
})
}

module.exports.help = {
  name: "help"
}
