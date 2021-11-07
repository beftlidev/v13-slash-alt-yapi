const Discord = require('discord.js');

const db = require("croxydb") 

const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = {

  name: "invite", 

  options: [], 

  

    description: '📎 Shows invitation links.',

    run: async (client, interaction) => {

let dil = db.fetch(`dil_${interaction.user.id}`)

if(!dil) {

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

if(dil === "TR") {

const embed = new Discord.MessageEmbed() 

.setDescription("Aşağıdan istediğin linke gidebilir sin!")

.setColor("GREEN")

const row = new MessageActionRow()

			.addComponents(

 new Discord.MessageButton() 

.setStyle("LINK") 

.setLabel("Davet linkim") 

.setURL("https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot+applications.commands&permissions=2147483656"), 

new Discord.MessageButton() 

.setStyle("LINK") 

.setLabel("Destek sunucum") 

.setURL("https://discord.gg/KZfAEjrPUF"), 

new Discord.MessageButton() 

.setStyle("LINK") 

.setLabel("Oy linkim") 

.setURL("https://top.gg/bot/765207268408033322") 

); 

await interaction.reply({embeds: [embed], ephemeral: true, components: [row]}) 

}

} 

} 