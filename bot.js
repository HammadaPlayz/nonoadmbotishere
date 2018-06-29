const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"

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
     client.user.setActivity("#help",{type: 'WATCHING'})
});

 
client.on('message', message => {
	 if (message.author.bot) return;
	   if (message.content ===  "$help") {
		   message.channel.send('**Alright Check ur dm bud :D**')
		   
 
 message.author.sendMessage(`
 
 

 
 {[Members commands that they can use !!]}
 
 [say help ! if u want to see the commands ]
 
 
 [say ^server !! to see the server informations]
 
 
 [say ^id !! if u want to see ur informations]
 
 
 [say &creator !! to see who created the code !!]
 

 {[Admins commands]}
 
 [$bc !! to send to all of the members a messege the same time !!]
 [$ban !! to ban anyone]
 [$kick !! TO KICK ANYONE]
`);
	   
});

client.login(process.env.BOT_TOKEN);
