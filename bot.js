const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"

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
});


client.on('ready', () => {
     client.user.setActivity("-help",{type: 'WATCHING'})
});

client.login(process.env.BOT_TOKEN);
