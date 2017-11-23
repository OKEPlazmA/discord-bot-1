const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MzM5MjIwMjU4MDI2MTYwMTMx.DPfeng.z84V4nTl8YwPmmuPzk-6EmfoUjY');
