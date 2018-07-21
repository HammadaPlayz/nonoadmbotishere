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
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**#bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' The server', `${message.guild.name}`, true)
          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)
          .addField(' the messege ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const Hamada = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| the messege is loading ')
      .addBlankField(true)
      .addField('♨| i got sended to  ', message.guild.memberCount , true)
      .addField('📝| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});
client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "welcome-leave")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("oh why hello there welcome to the server ;D  ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "welcome-leave")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("someone left ;( i hope he enjoyed with us ;D")
        .setTimestamp()
        return wc.sendEmbed(embed);
});
  

client.on('message', message => {
            if (message.content.startsWith("#help-general")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help** ' ,' **showing u the commands** ')
.addField('    **#server**' ,' **showing u the server info** ')
.addField('    **#avatar**' ,' **get ur avatar !** ')
.addField('    **#say**' ,' **let the bot say like u say** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});




client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```but any number of messeges u want to remove 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\ndone i removed: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "#say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
});


  client.on('message', message => {
    if (message.content === "#server") {
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

    }
});






client.on('message', message => {
            if (message.content.startsWith("rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**First**', '** Forbidden **')
.addField ('**Second**', '** Do not settle spam')
.addField ('** Third**', '** Do not disturb others **')
.addField ('**fourth**', '** Prohibited Ads **')
.addField ('**fiveth**', '** Respect others **')
.addField ('**sixth**', '** not published in chat or even private **')
.addField ('**seventh**', '** Do not post links! **')
.addField ('**Eighth**', ' Do not settle spammy **')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

 client.on('message', message => {
            if (message.content.startsWith("Hey Bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**wut**', ' ? ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);

			}
 });
   client.on('message', message => {
            if (message.content.startsWith("Can u sing ?")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**No i cant but i can write it **', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
			}
 });
   client.on('message', message => {
            if (message.content.startsWith("bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**WUT OMG**', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
			}
 });
   client.on('message', message => {
            if (message.content.startsWith("Can u show me the rules ?")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**Um yeah sure bud ;D **', ' ! ')
.addField ('**First**', '** do not curse ! **')
.addField ('**Second**', '** Do not settle spam**')
.addField ('** Third**', '** Do not disturb others **')
.addField ('**fourth**', '** Prohibited Ads **')
.addField ('**fiveth**', '** Respect others **')
.addField ('**sixth**', '** not published in chat or even private **')
.addField ('**seventh**', '** Do not post links! **')
.addField ('**Eighth**', ' **do not swear just who have a role !**')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
			}
 });
client.on('message', message => {
            if (message.content.startsWith("Alright sing !")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**Llalalallalalalal hm hm im bad on sing nvm  **', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
			}
 });



	}
 });
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('نوب')){
        message.delete()
    return message.reply(`**انا دايما اراقبك-_-**`)
	  message.delete()
    }
});




   client.on('message', message => {
            if (message.content.startsWith("السلام عليكم")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**وعليكم السلام **', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
			}
 });
    client.on('message', message => {
            if (message.content.startsWith("هلا")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**اهلا بيك**', ' ! ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
			}
 });






const halls = [
  "**oops there is something wrong ;X please try again !!**.",
  "**No running in the halls !!**.",
  "**No spamming in the halls**.",
  "**Lets Play !!! ;3**.",
  "**oops u missed up XD**.", 
  "**1+ ? = 10 ?**.", 
  "**No commands in the halls ;P**.", 
  "**No vpn in the halls !!ا**.", 
  "**No making bots in the halls**.", 
  "**No banning in the halls**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("#halls")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('Halls' ,
  `${halls[Math.floor(Math.random() * halls.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
	var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**type the reason for kickin him !!**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**oops !! i cant kick !? pls give me higher role !!**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
   client.on("message", message => {
	var prefix = "-";
 if (message.content === "#help-admin") {
	  message.channel.send('**check ur dm bud ;D !!** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
         
**❖-#kick | kicking a member
❖-#say | Let the bot say like u say !
❖-#halls | its a little game u can play it with ur  friend !!
❖-#clear | tired removing messeages ? now u can clear faster !!
❖-#bc | Lets send a messeage to all of the members !!** `)
   message.author.sendEmbed(embed)
    
   }
   }); 






















 












client.login(process.env.BOT_TOKEN);
