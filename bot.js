const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { prefix, token } = config;

client.login(token);

client.on('ready', () => {
  console.log('ready');
});

const hellos = [
  'Hey Buddy 🙋‍♂️',
  'Hello 👋🏻',
  'Namashkara 🙏🏻',
  'yeppdi Macha 🤟🏻'
];

client.on('message', (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (arithmatic(message)) {
    message.channel.send(arithmatic(message));
  }
  if (message.content.toLowerCase() === `${prefix}hey`){
    const index = Math.floor(Math.random() * hellos.length);
    message.channel.send(hellos[index]);
  }

  if (message.content.toLowerCase() === `${prefix}info`) {
    message.channel.send('```📛 NAME:' + message.author.username + '\n' + '🆔 ID:' + message.author.id + '```');
  }

  // if (message.content.toLowerCase() === `${prefix}info`) {
  //   message.channel.send(`NAME: ${message.author.username}\nID: ${message.author.id}`);
  // }

  
  if (message.content.toLowerCase() === `${prefix}server`) {
    message.channel.send('```📛 NAME:' + message.guild.name  + '\n' + '😲 Total Member:' + message.guild.memberCount + '\n' + '🆔 ID:' + message.guild.id  + '```');
  }

  // if (message.content.toLowerCase() === `${prefix}server`) {
  //   message.channel.send(`NAME: ${message.guild.name}\nTOTAL NUMBER: ${message.guild.memberCount}\nID: ${message.guild.id}`);
  // }

});


function arithmatic(message) {

  const args = message.content.slice(prefix.length).trim().split(' ');
  console.log(args);
  const command = args.shift().toLowerCase();
  console.log(command);

  if (command.toLowerCase() === 'add') {
    const intArgs = args.map(Number);
    return intArgs[0] + intArgs[1];
  } 
  else if (command.toLowerCase() === 'sub') {
    const intArgs = args.map(Number);
    return intArgs[0] - intArgs[1];
  } 
  else if (command.toLowerCase() === 'mul') {
    const intArgs = args.map(Number);
    return intArgs[0] * intArgs[1];
  } 
  else if (command.toLowerCase() === 'div') {
    const intArgs = args.map(Number);
    return intArgs[0] / intArgs[1];
  }
 
}
