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





client.login(process.env.BOT_TOKEN);
