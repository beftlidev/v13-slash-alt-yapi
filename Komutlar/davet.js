const Discord = require('discord.js');

const db = require("croxydb") 

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "invite", 

  options: [], 

  

    description: '📎 Shows invitation links.',

    run: async (client, interaction) => {


const embed = new Discord.MessageEmbed() 

.setDescription("You can go to any link you want from below!")

.setColor("GREEN")

const row = new MessageActionRow()

			.addComponents(

 new Discord.MessageButton() 

.setStyle("LINK") 

.setLabel("My invitation link") 

.setURL("https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot+applications.commands&permissions=2147483656"), 

new Discord.MessageButton() 

.setStyle("LINK") 

.setLabel("My support server") 

.setURL("https://discord.gg/KZfAEjrPUF"), 

new Discord.MessageButton() 

.setStyle("LINK") 

.setLabel("My voting link") 

.setURL("https://top.gg/bot/765207268408033322/vote") 

); 

await interaction.reply({embeds: [embed], ephemeral: true, components: [row]})  


} 

} 
