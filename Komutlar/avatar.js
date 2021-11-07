const Discord = require("discord.js") 
const db = require("croxydb") 
const {MessageActionRow, MessageButton} = require("discord.js") 

module.exports = { 

  name: "avatar", 

  options: [

{          

  name: 'user',

            description: '❔ If you want to look at someone else s avatar, present what s going on!',

            type: 'USER',

            required: false

        }

], 

    description: '👤 You\' ll see your avatar or someone else \'s avatar.',

    run: async (client, interaction) => {

   const u = interaction.options.getUser('user');

let kullanıcı = u || interaction.user

const row = new MessageActionRow()

			.addComponents(new MessageButton() 

.setStyle("LINK")

.setLabel("Avatar URL") 

.setURL(`${kullanıcı.avatarURL({ dynamic: true, size: 2048 })}`) 

); 


const embed = new Discord.MessageEmbed() 

.setTitle("*Amazing avatar 2000*") 

.setColor('#0099ff') 

.setImage(kullanıcı.avatarURL({ dynamic: true, size: 2048 })) 

interaction.reply({embeds: [embed], components: [row], ephemeral: true}) 

} 

} 
