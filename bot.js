const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const { prefix, token } = config;
client.login(token);


client.on('ready', () => {
  console.log('ready');
});

const hellos = [
  'Hey Buddy',
  'Hello',
  'Namashkara',
  'yeppdi Macha'
];

client.on('message', (message) => {
  if (message.content.toLocaleLowerCase() === 'hey'){
    const index = Math.floor(Math.random() * hellos.length);
    message.channel.send(hellos[index]);
  }
  if (message.content.toLocaleLowerCase() === `${prefix}info`) {
    message.channel.send(`NAME: ${message.author.username}\nID: ${message.author.id}`);
  }
  
  if (message.content.toLocaleLowerCase() === `${prefix}server`) {
    message.channel.send(`NAME: ${message.guild.name}\nTOTAL NUMBER: ${message.guild.memberCount}\nID: ${message.guild.id}`);
  }
});
