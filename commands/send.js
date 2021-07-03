const Discord = require("discord.js");

module.exports = {
    name: 'send',
    description: 'bonk!',
    async execute(client, message, config, args) {
        let decision = args[0];
        let user = message.mentions.members.first() || message.guild.members.get(args[1]);
      
          message.delete();
        if (!message.guild.id == "661361742282096650") return message.channel.send("Det må du ikke det der")

        if(message.member.roles.cache.some(r => r.name === "Moderator") || message.member.roles.cache.some(r => r.name === "Manager") ) {

        if (decision = "skinner") {
            let embed = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setTitle(`Ansøgning Verified Skinner/Grafiker`)
            .setDescription(`Hej **${user}**, jeg vil bede dig om at udfylde denne skabelon, for at ansøge som Verified Skinner/Grafiker\n\n
            **Hvor langt tid har du skinnet/arbejdet med grafik?:**\n\n
            **Hvorfor skal vi vælge dig fremfor andre der ansøger om verified skinner/grafiker ranken?:**\n\n
            **Hvad gør dig så unik, at du skiller dig udfra mængden?:**\n\n
            **Er du erfaren med eksempelvis og lave egne patches fra bunden?:**\n\n
            **Showcase - send gerne links/billeder af dine projekter:**\n\n
            **Proof - har du evt. .psd filer af dit arbejde, så du kan beviste at det er dit arbejde?:**\n\n
            **Er du indforstået med at verified skinner/grafiker ranken også indebærer at man deler ud af sine erfaringer i diverse skinning/grafik kanaler?:**\n\n
            *OBS! Denne ansøgning er afgørende for om du bliver accepteret eller afvist. Gør dig umage, brug den tid du mener du skal bruge for at komme med en tilfredstillende ansøgning.*`)
            .setFooter(`Lavet til ${user.user.username}`)
            .setAuthor(client.user.username)

            message.channel.send(embed);
        }
        else message.channel.send(`Dette er ikke opsat endnu`);

        } else {
            message.channel.send("Du har ikke permission til at rode med det her :)")
        }
    }
};
