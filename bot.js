const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "^"


client.on('ready', () => {
  client.user.setGame(`!help `,'https://www.twitch.tv/v5bz');
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Client Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
}
          });
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "!say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  };
});


  client.on('message', message => {
    if (message.content === "!server") {
        if (!message.channel.guild) return;
        const millis = new Date().getTime() - message.guild.createdAt.getTime();
        const now = new Date();


        const days = millis / 1000 / 60 / 60 / 24;
        let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
        var embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("**Server ID**", "**" + message.guild.id + "**", true)
            .addField("**Server Owner**", "**" + message.guild.owner + "**", true)
            .addField("**Server Location**", "**" + message.guild.region + "**", true)
            .addField('**Server Text Channels**', `**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`, true)
            .addField("**Server Voice Channels**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `, true)
            .addField("**Date created**", ` ** [ ${days.toFixed(0)} ] ** Day `, true)
            .addField("**Roles**", `**[${message.guild.roles.size}]** Role `, true)

        .addField("Members", `
**${message.guild.memberCount}**`)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
        message.channel.sendEmbed(embed)

    };
});



client.on('message', message => {
if (message.content.startsWith("!kick")) {
    var mention = message.mentions.member.first();
    if(!mention) return message.channel.send("u want to ping who u want to kick");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("got kicked : " + mention.tag);
};
});



client.on('message', message => {
if (message.content.startsWith("!ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("u want to ping who u want to ban ;D");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("got banned : " + mention.tag);
};
});

client.login(process.env.BOT_TOKEN);
