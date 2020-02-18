var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '#'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "678324570242940928") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: ツ ēŁǤƶȥąƦ ツ${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: ツ ēŁǤƶȥąƦ ツ${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To ツ ēŁǤƶȥąƦ ツ${argresult}ツ ēŁǤƶȥąƦ ツ`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To ツ ēŁǤƶȥąƦ ツ${argresult}ツ ēŁǤƶȥąƦ ツ`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/kubbooo");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: ツ ēŁǤƶȥąƦ ツ${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});


client.login(process.env.BOT_TOKEN);
