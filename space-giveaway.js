const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const INTENTS = Object.entries(Discord.Intents.FLAGS).filter(([K]) => !["GUILD_PRESENCES", "GUILD_MEMBERS"].includes(K)).reduce((t, [, V]) => t | V, 0)
const client = new Discord.Client({intents: INTENTS}) 
const ayarlar = require("./ayarlar.json");
const db = require("croxydb"); 
const {MessageActionRow, MessageButton } = require("discord.js");
const got = require("got");
const prefix = "g.";
const xfinity = require("xfinity");
client.commands = new Discord.Collection();
const fetch = ("node-fetch");
const fs = require("fs");
require("./utils/loader.js")(client)
//require("./utils/loader-2.js")(client) 
const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./çekilişler.json",
  default: {
    botsCanWin: false,
    embedColor: "GREEN",
    embedColorEnd: "RED",
    reaction: "🎉"
  }
});

client.giveawaysManager = manager;





client.giveawaysManager.on('giveawayReactionAdded', async(giveaway, reactor, messageReaction) => {

const level = require("discord-xp");

const user = await Levels.fetch(reactor.user, giveaway.guildId, true);
const row = new MessageActionRow()

.addComponents(

new MessageButton()

.setStyle("LINK")

.setLabel("Giveaway")

.setEmoji("🎉")

.setURL(`https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}`)

) 
    let approved =  new Discord.MessageEmbed()

    .setTimestamp()

    .setColor("#2F3136")

    .setTitle("✅ Your participation has been confirmed!")

    

    
        .setFooter("Space Giveaway")

    .setTimestamp()

   let denied =  new Discord.MessageEmbed()

    .setTimestamp()

    .setColor("#2F3136")

    .setTitle("❌ Your participation has been denied!")

  
    
    .setFooter("Space Giveaway")

    let client = messageReaction.message.client

    if (reactor.user.bot) return;

    if(giveaway.extraData) {

      if (giveaway.extraData.server !== "null") {

       
try {
        
        
await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
          

          return reactor.send({

            embeds: [approved], components: [row]

          });

      } catch(e) {
messageReaction.users.remove(reactor.user);
        return reactor.send({

          embeds: [denied], components: [row] 

        }).catch(e => {}) 
}
         }
         
         
         
      if (giveaway.extraData.role !== "null"){
          
if(!reactor.roles.cache.has(giveaway.extraData.role)) {

            messageReaction.users.remove(reactor.user); 

        return reactor.send({

          embeds: [denied], components: [row]

        })

    }
          
          
             
   

        
         
         if(reactor.roles.cache.has(giveaway.extraData.role)) {
      return reactor.send({
        embeds: [approved], components: [row]
      })
  
           
     }
   }
   }
   
      
       
       
     })


   

       

    

   
        

    
      

      

       
    
   
    
   

  
 



const axios = require("axios") 

  


const express = require('express')

const Topgg = require('@top-gg/sdk')
  
const app = express()
const webhook = new Topgg.Webhook('spacegiveaway3008')
app.post('/dblwebhook', webhook.listener(async (vote) => {
console.log(`${vote.user} Oy verdi!`) 
const user = client.users.fetch(vote.user)

const cevaplar = [ "10", "4", "10", "2", "7", "2", "6", "5", "4", "2", "9", "3", "1", "4", "10" ] 

const coin = cevaplar[Math.floor(Math.random() * cevaplar.length)];



db.set(`voter_${vote.user}`, `<:voter_baby:905901938254704720>`)

const apinego = client.guilds.cache.get("752164000418234448").members.cache.get(vote.user)

apinego.roles.add("783011738240286760")
db.add(`coin_${vote.user}`, coin) 
db.add(`toplam_oy_${vote.user}`, 1)
    

      

      

      let oyver = db.fetch(`toplam_oy_${vote.user}`) 


    
    const embed = new Discord.MessageEmbed()

.setColor("#0099ff")

.setTitle("Thank you for voting 😍")

.setDescription(`<:guluyor_waycanina:905856553540812840> The voter: <@${vote.user}> **|** ${vote.user} 
<:webhooooook:905856144113819698> Role he won: <@&783011738240286760>
<:kalem_abi:905856474541080707> The coin he won: ${coin} 
<:mod:855750428926935050> Badge he won: \`Voter\`
<:yildizz:906166682391826432> His total vote: ${oyver} 
`)
const row = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle("LINK") 

.setLabel("Vote Link")

.setEmoji("906171167851814922")

.setURL("https://top.gg/bot/765207268408033322/vote"), 

new MessageButton() 

.setStyle("PRIMARY") 

.setLabel("Vote Notification")

.setEmoji("905901938254704720")

.setCustomId("oy_duyuru")

) 
client.channels.cache.get('844812716899696640').send({embeds: [embed], components: [row]})

    

        
    
})) 
 


app.listen(10011)

    
const {

    JsonDatabase,

    YamlDatabase

} = require("wio.db");

const cekilis = new JsonDatabase({ databasePath:"./databases/cekilis.json" 
});
const mesajlar = new JsonDatabase({ databasePath:"./databases/toplam-mesaj.json" 

});


     

        
   
      
      const simplydjs = require("simply-djs")

client.on('interactionCreate', async (interaction) => {

simplydjs.clickBtn(interaction, {

  db: cekilis

})

}) 
     
 



  
/* Load all events */
client.on("messageCreate", message => {
  if (message.channel.type === "dm") return;
});

client.login("NzY1MjA3MjY4NDA4MDMzMzIy.X4RczQ.DToLR138QTuGpXX6z0YGTZfPIr0");

client.on("messageCreate", async(m) => {
if (!m.guild) return;

  if (m.author.bot) return;
db.add(`toplam_mesaj_${m.guild.id}_${m.author.id}`, 1)

})  


  

client.on('interactionCreate', i => {

	
if (i.customId === 'Button3') {
  //let member = i.guild.members.cache.get(i.clicker.user.id)
db.set(`onayli_${i.user.id}`, "<:verified:799571972727504896>")

 // member.roles.add("900746429428031489");
i.reply({content: `You have successfully become an Approved user!`, ephemeral: true} ) 
	
 } 
	
	
  if(i.customId === "Button4") {
    db.set(`beta_${i.user.id}`, "<:beta:856408499025477632>")
    

  //i.clicker.user.roles.add("900746444837904454");
    i.reply({content: `You've successfully become a Beta user!`, ephemeral: true}) 
   } 
}) 
 

client.on("messageCreate", message => {
  if (message.channel.id == "848130151169392670") {
    message.react("<:blurplecheck:881423053245009990>");
    message.react("<:blurplecross:881423084651962439>");
  }
});


client.on("messageCreate", async (msg) => {
    if (msg.content.toLowerCase() === "g.bilgi") {
const row = new MessageActionRow()

			.addComponents(
       new MessageButton() 
     .setStyle("LINK")
        .setLabel("Davet linki") 
       .setURL("https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot+applications.commands&permissions=2147483656") 
        );

      msg.channel.send({content: `Hello, we no longer use the preend \`g.\`. We have switched to the Slash system, after clicking the button below, invite the bot again with the invitation link and activate the slash system for your server!`, components: [row] }) 
       } 
});
client.on("messageCreate", async (msg, member, guild) => {
  let açıkmı = await db.fetch(`gold_${msg.author.id}`);
  if (açıkmı) {
    if (msg.content.toLowerCase() === "sa") {
      const embed = new Discord.MessageEmbed()
        .setTitle("Bir gold üye belirdi!")
        .setDescription(
          "Aleyküm Selam Hoşgeldin Gold Üye! <a:nrp:821434879539281931>"
        )
        .setColor("GOLD");
      msg.reply(embed);
    }
  }
});



client.setMaxListeners(50);

const Levels = require("discord-xp");

Levels.setURL(
  "mongodb+srv://iugur:ub3008232412345ub@cluster0.wyidf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

client.on("messageCreate", async message => {
  if (!message.guild) return;

  if (message.author.bot) return;

  const randomXp = Math.floor(Math.random() * 9) + 1;
    const cevaplar = [
        "1", 
        "4",
        "1", 
        "2", 
        "1",
        "2", 
        "3",
        "5", 
        "3",
        "2", 
        "1",
        "2", 
        "1", 
        "4",
        "1", 
       ] 
    const coin = cevaplar[Math.floor(Math.random() * cevaplar.length)];
  let level = db.fetch(`level_${message.guild.id}`);
  const hasLeveledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    level || randomXp
  );

  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
db.set(`coin_${message.author.id}`, coin) 
    const embed = new Discord.MessageEmbed()
      .setDescription(`Congratulations!, **${user.level}** You jumped to level and won **${coin}** Coins! :tada:
`)
   .setColor("#0099ff")
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }));
      const row = new MessageActionRow() 
     .addComponents(
         new MessageButton() 
        .setStyle("LINK")
        .setLabel('Member')
        .setURL(`https://discord.com/users/${message.author.id}`)
        ) 
    let levellog = db.fetch(`levellog_${message.guild.id}`);

    client.channels.cache
      .get(levellog || `${message.channel.id}`)
      .send({content: `${message.author}`, embeds: [embed], components: [row]} );
  }
});
client.on("ready", async(message) => {
  console.log(`${client.user.tag} is online.`);
    



});

const talkedRecently = new Set();
client.on("interactionCreate", async (button) => {
  if (button.id === "Button3") {
await button.defer() 
     await button.clicker.member.roles.add("856580749948223510");

      await db.set(`onayli_${button.clicker.user.id}`, "<:verified:799571972727504896>");

      const evet = new Discord.MessageEmbed() 

.setDescription(`<:tik:804253394326913085> ${button.clicker.user.tag} Başarı ile onaylı kullanıcı oldun!`)

.setColor("GREEN")

await client.channels.cache.get("888856199670427658").send(evet)

    
  }

  if (button.id === "Button4") {
    await button.defer();
    
      await button.clicker.member.roles.add("866360260503535616");

      await db.set(`beta_${button.clicker.user.id}`, "<:beta:856408499025477632>");

const evet = new Discord.MessageEmbed() 

.setDescription(`<:tik:804253394326913085> ${button.clicker.user.tag} Başarı ile beta kullanıcı oldun!`)

.setColor("GREEN")

await client.channels.cache.get("888856199670427658").send(evet)

      
  }
  if (button.customId === "meme") {
    
      
      
		
      const embed = new Discord.MessageEmbed();
      got("https://www.reddit.com/r/burdurland/random/.json").then(response => {
        const [list] = JSON.parse(response.body);

        const [post] = list.data.children;

        const permalink = post.data.permalink;

        const memeUrl = `https://reddit.com${permalink}`;

        const memeImage = post.data.url;

        const memeTitle = post.data.title;

        const memeUpvotes = post.data.ups;

        const memeNumComments = post.data.num_comments;
const row = new MessageActionRow()

			.addComponents(
        new MessageButton()
          .setStyle("SECONDARY")
          .setLabel("New Meme!")
          .setEmoji("857937104323215360")
          .setCustomId("meme"), 
        
         new MessageButton()

          .setURL(`${memeUrl}`)
          .setLabel("Meme Link")
          .setStyle("LINK")
);
        embed.setTitle(`${memeTitle}`);

        embed.setURL(`${memeUrl}`);

        embed.setColor("RANDOM");

        embed.setImage(memeImage);

        button.update({
          embeds: [embed],

          components: [row]
        });

   }) 
 } 
  if (button.id === "memedelete") {
    
    button.message.delete();
  }
  if (button.id === "rank") {
    await button.defer();
    const rawLeaderboard = await Levels.fetchLeaderboard(button.guild.id, 5);
    const leaderboard = await Levels.computeLeaderboard(
      client,
      rawLeaderboard,
      true
    ); // We process the leaderboard.

    const lb = leaderboard.map(
      e =>
        `<:YTcountry:843872690917343253> ${e.position}. ${e.username}#${
          e.discriminator
        }\n<:star:856407998288101376> Level: ${
          e.level
        }\n<:backpack:856408019289767937> XP: ${e.xp.toLocaleString()}`
    );

    const rank = new Discord.MessageEmbed().setDescription(
      `<:roket:873257292634673192> **Leaderboard**:\n${lb.join("\n\n")}`
    );
    const row = new MessageActionRow()

			.addComponents(
    new MessageButton()
      .setStyle("gray")
      .setID("rank")
      .setLabel("Leader Board")
      .setEmoji("873257292634673192")
      .setDisabled()
        );
    const row1 = new MessageActionRow()

			.addComponents(
     new MessageButton()

      .setStyle("red")

      .setLabel("Sil")

      .setEmoji("856408185845055498")

      .setID("lbsil")
        );
    button.update({components: [row]});
    button.channel.send({ embeds: [rank], components: [row1],ephemeral: true });
  }
  if (button.id === "lbsil") {
    button.message.delete();
  }
  if (button.customId === "cekilisc") {
      
    const çekiliş = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:blurple_tada:841709529217105941> Çekiliş Komutları [ `5` ]")

      .setDescription(
        `> **/çekiliş-başlat** -Çekiliş başlatırsınız.
> **/çekiliş-bitir** - Çekilişi bitirirsiniz.
> **/çekiliş-sil** - Çekiliş silersiniz. 
> **/çekiliş-yeniden-çek** - Çekiliş kazanan yeniden çekersiniz.
`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());
const row = new MessageActionRow()

			.addComponents(
     new MessageButton()
      .setStyle("SECONDARY")
      .setCustomId("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941")
      .setDisabled(), 
     new MessageButton()
      .setStyle("SECONDARY")
      .setCustomId("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628"), 
    new MessageButton()
      .setStyle("SECONDARY")
      .setCustomId("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657"), 
     new MessageButton()
      .setStyle("SECONDARY")
      .setCustomId("levelc")
      .setLabel("")
      .setEmoji("873257292634673192")
        );
    const row1 = new MessageActionRow()

			.addComponents(
     new MessageButton()
      .setStyle("SUCCESS")
      .setCustomId("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834"), 
    );
    button.update({
      embeds: [çekiliş],
      components: [row, row1]
    });
 
  }
  if (button.customId === "kullanıcıc") {
    
    const bot = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:member:863394738462916628> Kullanıcı Komutları [ `10` ]")

      .setDescription(
        `> **/avatar** - Avatarınızı veya başkasının avatar görürsünüz. 
> **/aşk-ölçer** - Eğlence amaçlı yapılmıştır. 
> **/davet** - Davet linklerini yollar. 
> **/dbl-i** - Top.gg bilgileri gösterir. 
> **/i** - İstatistiği gösterir. 
> **/meme** - Komik fotolar atar. 
> **/ping** - Botun pingini gösterir. 
> **/profil** - Profilinizi gösterir. 
> **/sponsor** - Sponsor. 
> **/sunucu-bilgi** - Sunucu bilgilerini gösterir. 
`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    
      const row = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("cekilisc")

      .setLabel("")

      .setEmoji("841709529217105941"), 

      

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("kullanıcıc")

      .setLabel("")

      .setEmoji("863394738462916628")
.setDisabled(), 
    new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("yetkilic")

      .setLabel("")

      .setEmoji("873257181678534657"), 

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("levelc")

      .setLabel("")

      .setEmoji("873257292634673192")

        );
      const row1 = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SUCCESS")

      .setCustomId("anamenü")

      .setLabel("Ana Menü")

      .setEmoji("856408214315597834")

    
        );

    button.update({

      embeds: [bot],

      components: [row, row1]

    });
  }
  if (button.customId === "yetkilic") {
    
    const yetkili = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:yetkili:873257181678534657> Yetkili Komutları [ `0` ]")

      .setDescription(
        `> **Yakında!**`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    
      
        const row = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("cekilisc")

      .setLabel("")

      .setEmoji("841709529217105941"), 

      

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("kullanıcıc")

      .setLabel("")

      .setEmoji("863394738462916628"), 

    new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("yetkilic")

      .setLabel("")

      .setEmoji("873257181678534657")
       .setDisabled(), 

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("levelc")

      .setLabel("")

      .setEmoji("873257292634673192")

        );
            const row1 = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SUCCESS")

      .setCustomId("anamenü")

      .setLabel("Ana Menü")

      .setEmoji("856408214315597834"), 

    

      
        );

    button.update({

      embeds: [yetkili],

      components: [row, row1]

    });
  
  }
  if (button.customId === "levelc") {
    
    const level = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:roket:873257292634673192> Level Komutları [ `7` ]")

      .setDescription(
        `> **/rank** - Rankınızı gösterir.
> **/leader-board** - Leader board açar.
> **/level-log** - Level log ayarlarsınız.`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    const row = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("cekilisc")

      .setLabel("")

      .setEmoji("841709529217105941"), 

      

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("kullanıcıc")

      .setLabel("")

      .setEmoji("863394738462916628"), 

    new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("yetkilic")

      .setLabel("")

      .setEmoji("873257181678534657"), 

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("levelc")

      .setLabel("")

      .setEmoji("873257292634673192")
.setDisabled()
        );
      const row1 = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SUCCESS")

      .setCustomId("anamenü")

      .setLabel("Ana Menü")

      .setEmoji("856408214315597834"), 

    
        );

    button.update({

      embeds: [level],

      components: [row, row1]

    });
  }
  if (button.customId === "anamenü") {
    
    const embed = new Discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription(
        `<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:emoji_69:841947953278484480> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:civi:873257230709981200> Uuuuu luna parkamı geldik!
<:roket:873257292634673192> Level kasmak güzel olabilir!
                        `
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL())
      .setImage(
        "https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg"
      );
    const row = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("cekilisc")

      .setLabel("")

      .setEmoji("841709529217105941"), 

      

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("kullanıcıc")

      .setLabel("")

      .setEmoji("863394738462916628"), 

    new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("yetkilic")

      .setLabel("")

      .setEmoji("873257181678534657"), 

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("levelc")

      .setLabel("")

      .setEmoji("873257292634673192")

        )
      const row1 = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SUCCESS")

      .setCustomId("anamenü")

      .setLabel("Ana Menü")
.setDisabled() 
      .setEmoji("856408214315597834"), 


      
        );

    button.update({

      embeds: [embed],

      components: [row, row1]

    });
  }
  if (button.id === "yardımsil") {
    await button.defer();
    const sil = new MessageEmbed()
      .setDescription("Yardım menüsünü silmek istediğinden emin misin?")
      .setColor("RED");
    const r1 = new MessageButton()
      .setStyle("green")
      .setID("yardımevet")
      .setLabel("Evet")
      .setEmoji("881423053245009990");
    const r2 = new MessageButton()
      .setStyle("red")
      .setID("yardımhayır")
      .setLabel("Hayır")
      .setEmoji("881423084651962439");
    button.message.edit({ embed: sil, buttons: [r1, r2] });
  }
  if (button.id === "yardımevet") {
    await button.defer();
    button.message.delete();
  }
  if (button.id === "yardımhayır") {
    await button.defer();
    const embed = new Discord.MessageEmbed()
      .setColor("BLURPLE")

      .setDescription(
        `<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:member:863394738462916628> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:roket:873257292634673192> Level kasmak güzel olabilir!
                        `
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL())
      .setImage(
        "https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg"
      );
    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941");
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628");
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657");
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192");
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834")
      .setDisabled();
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: embed,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
  }

  
    if (button.customId == "ticket_ac") {

    button.reply({content: "Ticket created successfully!", ephemeral: true}) 

    let Category = db.fetch(`ticket_kategori_${button.guild.id}`);

    let Role = db.fetch(`ticket_rol_${button.guild.id}`);

    

    const ticketChannel = await button.guild.channels.create(

      `${button.user.tag}`,

      {

        name: "ticket",

        parent: Category,

        type: "text"

      }

    );

    ticketChannel.permissionOverwrites.create(button.user.id, {

VIEW_CHANNEL: true,

SEND_MESSAGES: true

    });
   ticketChannel.permissionOverwrites.create(Role, {

      VIEW_CHANNEL: true, 

     SEND_MESSAGES: true

    });

    ticketChannel.permissionOverwrites.create(button.guild.id, {  VIEW_CHANNEL: false });

    const ticketEmbed = new MessageEmbed()

      

      .setDescription(

        `You can click on the button below to take any action about Ticket.`

      );
const row = new MessageActionRow()

			.addComponents(

    new MessageButton()

      .setStyle("SECONDARY")
.setEmoji('❌') 
      .setLabel("")

      .setCustomId("ticket_kapat")

);

    ticketChannel.send({content: `${button.user}`, embeds: [ticketEmbed], components: [row]});

  }
    if(button.customId == "ticket_geri") {

const row = new MessageActionRow()

			.addComponents(

    new MessageButton()

      .setStyle("SECONDARY")

      .setLabel("")

.setEmoji('❌') 

      .setCustomId("ticket_kapat")

);

const embed = new Discord.MessageEmbed() 

.setDescription('You can click on the button below to take any action about Ticket.') 

.setColor('#FF7F00') 

button.update({embeds: [embed], components: [row]})

}
    if(button.customId == "ticket_kapat") {

const embed = new Discord.MessageEmbed() 

.setDescription(`🔓 - Ticket opens it back. 
❌ - Ticket deletes completely. 
📜 - Backs up Ticket messages into a txt file.
`) 

.setColor('#0099ff')

const row = new MessageActionRow() 

.addComponents(

new MessageButton() 

.setStyle("PRIMARY")

.setLabel("")

.setEmoji("🔓")

.setCustomId("ticket_geri"), 
    new MessageButton() 

.setStyle("SECONDARY")

.setLabel("")

.setEmoji("❌")

.setCustomId("ticket_sil"), 

new MessageButton() 

.setStyle("SUCCESS")

.setLabel("")

.setEmoji("📜")

.setCustomId("ticket_mesaj") 

) 

button.update({embeds: [embed], components: [row]})

} 
    if (button.customId == "ticket_sil") {




    
 
const embed = new Discord.MessageEmbed() 
.setDescription('✅ Ticket will be closed in 5 seconds...')


button.channel.send({embeds: [embed]}) 

    

    setTimeout(() => {

      button.channel.delete();

    }, 5000);

  }
 
    if(button.customId == "ticket_mesaj") {

let sj = await button.channel.messages.fetch({limit: 100})

let response = []

sj = sj.sort((a, b) => a.createdTimestamp - b.createdTimestamp)

sj.forEach((m) => {

if (m.author.bot) return

const attachment = m.attachments.first()

const url = attachment ? attachment.url : null

if (url !== null) {m.content = url}
    response.push(`👤 ${m.author.tag} | 🗯️ ${m.content}`)})

await button.channel.send({embeds: [new Discord.MessageEmbed()	

.setColor('#0099ff')

.setAuthor('ℹ️ I back up messages sent to Ticket...')]})

let attach = new Discord.MessageAttachment(Buffer.from(response.toString().replaceAll(',', '\n'), 'utf-8'),`${button.channel.name}.txt`)

setTimeout(async () => {await button.channel.send({ content: `✅ \`${button.channel.name}\` I transferred ticket \'s messages to the file below.`, files: [attach]})}, 3000)

}
    
  if (button.id == "iyenile") {
    const moment = require("moment");

const os = require('os');
    require("moment-duration-format");
    const promises = [
client.shard.fetchClientValues('guilds.cache.size'),

	client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),

];

  Promise.all(promises)

	.then(results => {

		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

		const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let embed = new Discord.MessageEmbed()

    .setColor("RANDOM") 
  .setAuthor("İstatistik") 

    .addField("<:sw:856408155184955402> Toplam sunucu", totalGuilds) 

    .addField("<:member:856408299229151242> Toplam Kullanıcı", totalMembers) 

    .addField("<:emoji_41:866556150044033064> Pingim", client.ws.ping) 

    .addField("<:emoji_41:866556150044033064> Shard ID", `${client.shard.ids} / 1`) 

    .addField("<:discordjs:886987041437519972> Discord.js Sürümü", `${Discord.version}`, true)

    .addField("<a:vds:886987302428102686> Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)} MB`, true)

    .addField(`<a:uptime:886987717282500629> Uptime`, `${duration}`, true)

    .addField(`<:pusula:856408214315597834> Toplam Komut Sayısı`, `**${client.commands.size}**`, true)
  
  .addField(`<:rules:799571949286064159> Kuralları Kabul Eden Kişi Sayısı`, `${db.fetch(`Kabul`) || "1"}`)

    .addField("<:owner:850625005548470273> Yapımcım & Geliştirici", "<@753842258457002036>")
.setFooter(`Son yenilenme ->`)

.setTimestamp()
   const b1 = new MessageButton() 

.setStyle("gray")

.setLabel("Yenile") 

.setEmoji("873257273236029491") 

.setID("iyenile")

button.message.edit({ embed: embed, 

buttons: [b1] 

}) 

}) 
   } 
  
  if (button.customId == "dmyardım") {

    const embed = new Discord.MessageEmbed()

    .setColor("BLURPLE")

    .setDescription(`<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:member:863394738462916628> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:roket:873257292634673192> Level kasmak güzel olabilir!
    `) 

    .setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

                   const row = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("cekilisc")

      .setLabel("")

      .setEmoji("841709529217105941"), 

      
        new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("kullanıcıc")

      .setLabel("")

      .setEmoji("863394738462916628"), 

    new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("yetkilic")

      .setLabel("")

      .setEmoji("873257181678534657"), 

     new MessageButton()

      .setStyle("SECONDARY")

      .setCustomId("levelc")

      .setLabel("")

      .setEmoji("873257292634673192")

        );
     const row1 = new MessageActionRow()

			.addComponents(

     new MessageButton()

      .setStyle("SUCCESS")

      .setCustomId("anamenü")

      .setLabel("Ana Menü")

      .setEmoji("856408214315597834"), 

    

      
        );

    
    const ğğ = new Discord.MessageEmbed() 

.setDescription("<:tik:804253394326913085> Yardım Menüsü dm üzerinden gönderildi!") 

.setColor("GREEN") 


   button.update({embeds: [ğğ], component: [] 
}) 
button.user.send({ embeds: [embed] ,

    components: [

      row, row1
      ]

    })
}
  
  if (button.customId == "kanalyardım") {

    const embed = new Discord.MessageEmbed()

    .setColor("BLURPLE")

    .setDescription(`<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:member:863394738462916628> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:roket:873257292634673192> Level kasmak güzel olabilir!
    `)

    .setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")
const row = new MessageActionRow()

			.addComponents(
   new MessageButton()

   .setStyle("SECONDARY")

   .setCustomId("cekilisc")

   .setLabel("")

   .setEmoji("841709529217105941"), 

    new MessageButton()

   .setStyle("SECONDARY")

   .setCustomId("kullanıcıc")

   .setLabel("")

   .setEmoji("863394738462916628"), 
    new MessageButton()

   .setStyle("SECONDARY")

   .setCustomId("yetkilic")

   .setLabel("")

   .setEmoji("873257181678534657"), 

   new MessageButton()

   .setStyle("SECONDARY")

   .setCustomId("levelc")

   .setLabel("")

   .setEmoji("873257292634673192")
   );
const row1 = new MessageActionRow()

			.addComponents(
    new MessageButton()

   .setStyle("SUCCESS")

   .setCustomId("anamenü")

   .setLabel("Ana Menü")

   .setEmoji("856408214315597834")
.setDisabled()

   

   
        );
   button.update({ embeds: [embed],

    components: [row, row1]

    })

} 
    if(button.customId == "oylamaevet") {

        if (db.fetch(`oylama_katildi_evet_${button.user.id}_${button.guild.id}_${button.message.id}`)) {

            await db.delete(`oylama_katildi_evet_${button.user.id}_${button.guild.id}_${button.message.id}`) 

            await db.subtract(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`, 1)

            let evetdb = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)

            let hayırdb = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)
const row = new MessageActionRow()

			.addComponents(
new MessageButton() 

.setStyle("SUCCESS")

.setLabel(`(${evetdb || "0"}) Yes`) 

.setEmoji("881423053245009990") 

.setCustomId("oylamaevet"), 
new MessageButton() 

.setStyle("DANGER")

.setLabel(`(${hayırdb || "0"}) No`) 

.setEmoji("881423084651962439") 

.setCustomId("oylamahayır") 
);
const user = new Discord.MessageEmbed() 

.setDescription("<:blurplecheck:881423053245009990> Oylamadan Evet tepkini geri çektin!") 

.setColor("GREEN") 
     //button.reply({content: `<:blurplecheck:881423053245009990> Oylamadan Evet tepkini geri çektin!`, ephemeral: true} )
           
button.update({embeds: [button.message.embeds[0]], components: [row]}) 

     
                } else {

            await db.set(`oylama_katildi_evet_${button.user.id}_${button.guild.id}_${button.message.id}`, "katildi") 

            await db.add(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`, 1)

            let evetdb1 = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)

            let hayırdb1 = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)
const row1 = new MessageActionRow()

			.addComponents(
new MessageButton() 

.setStyle("SUCCESS")

.setLabel(`(${evetdb1 || 0}) Yes`) 

.setEmoji("881423053245009990") 

.setCustomId("oylamaevet"), 

 new MessageButton() 

.setStyle("DANGER")

.setLabel(`(${hayırdb1 || 0}) No`) 

.setEmoji("881423084651962439") 

.setCustomId("oylamahayır") 
        );
const user1 = new Discord.MessageEmbed() 

.setDescription("<:blurplecheck:881423053245009990> Oylamaya Evet tepkisi verdin!") 

.setColor("GREEN") 
const embed = new Discord.MessageEmbed() 
.setDescription(`${button.message.embeds[0]}.`)

button.update({embeds: [button.message.embeds[0]], components: [row1]})
//button.reply({embeds: [user1], ephemeral: true} ) 

        }

}
          if(button.customId == "oylamahayır") {


        if (db.fetch(`oylama_katildi_hayır_${button.user.id}_${button.guild.id}_${button.message.id}`)) {

            await db.delete(`oylama_katildi_hayır_${button.user.id}_${button.guild.id}_${button.message.id}`) 

            await db.subtract(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`, 1)

            let evetdb = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)

            let hayırdb = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)
const row = new MessageActionRow()

			.addComponents(
new MessageButton() 

.setStyle("SUCCESS")

.setLabel(`(${evetdb || 0}) Yes`) 

.setEmoji("881423053245009990") 

.setCustomId("oylamaevet"), 
new MessageButton() 

.setStyle("DANGER")

.setLabel(`(${hayırdb || 0}) No`) 

.setEmoji("881423084651962439") 

.setCustomId("oylamahayır") 
);
const user = new Discord.MessageEmbed() 

.setDescription("<:blurplecheck:881423053245009990> Oylamadan Hayır tepkini geri çektin!") 

.setColor("RED") 

button.update({embeds: [button.message.embeds[0]], components: [row]}) 

//button.reply({embeds: [user], ephemeral: true} )
            } else {

            await db.set(`oylama_katildi_hayır_${button.user.id}_${button.guild.id}_${button.message.id}`, "katildi") 

            await db.add(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`, 1)

            let evetdb1 = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)

            let hayırdb1 = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)
const row = new MessageActionRow()

			.addComponents(
new MessageButton() 

.setStyle("SUCCESS")

.setLabel(`(${evetdb1 || 0}) Yes`) 

.setEmoji("881423053245009990") 

.setCustomId("oylamaevet"), 
new MessageButton() 

.setStyle("DANGER")

.setLabel(`(${hayırdb1 || 0}) No`) 

.setEmoji("881423084651962439") 

.setCustomId("oylamahayır") 
);
const user1 = new Discord.MessageEmbed() 

.setDescription("<:blurplecheck:881423053245009990> Oylamaya Hayır tepkisini verdin!") 

.setColor("RED") 

button.update({embeds: [button.message.embeds[0]], components: [row]}) 
    // button.reply({embeds: [user1], ephemeral: true} )
              } 
             } 
    if(button.id == "sayhello") {
await button.defer() 
let mesaj = `<@${button.clicker.user.id}> *Diyorki*: <a:hello:894505402098667570> Sunucumuza Hoşgeldin, seni burda görmek çok güzel!`

const say = new MessageButton() 

.setStyle("gray")

.setLabel("Say Hello!") 

.setEmoji("894505402098667570") 

.setID("sayhello") 

.setDisabled() 
const embed = new Discord.MessageEmbed() 
.setDescription("Sunucumuza Hoşgeldin!") 
.setColor("GREEN") 
button.message.edit({embed: button.message.embeds[0], buttons: [say]}) 

button.channel.send(mesaj) 

} 
    if(button.id == "kuralkabul") {
await button.defer() 
        
  const Revenge = new Discord.MessageEmbed()

  .setColor('GREEN')

  .setAuthor(button.clicker.user.username+' Kuralları Kabul Ettin.!')

  .setDescription(`**Tebrikler <@${button.clicker.user.id}>,** 
**Artık \`Space Giveaway\`'ı Kullanabilirsin!**`)

  button.message.edit({embed: Revenge})

  db.set(`Kurallar_${button.clicker.user.id}`,true)

  db.add(`Kabul`, 1)

  }
    if (button.customId === "buton_rol") {

    let rol = db.fetch(`buton_rol_${button.message.id}_${button.guild.id}`)

    if (button.member.roles.cache.get(rol)) {

      await button.member.roles.remove(rol);

button.reply({content: `<:blurplecheck:881423053245009990> I successfully took on the role <@&`+ rol +`>.`, ephemeral: true}) 

    } else {

      await button.member.roles.add(rol);

button.reply({content: '<:blurplecheck:881423053245009990> I successfully gave you the role <@&'+ rol +'>.', ephemeral: true}) 

    }

  }
    if(button.customId == "pre_bilgi") {

const embed = new Discord.MessageEmbed() 

.setDescription(`<:kalem:857937104323215360> Premium information! ℹ️

\` - \` Premium yakında ekliyeceğimiz (küfür engel, reklam engel, sticker engel) gibi muazzam özellikler içerecek sistemleri kullanmanıza yarayacak.

\` - \` Premium alınca aldığınız sunucuya premium rozeti, alan kişiye premium rozeti, alan kişiye erken dönem destekçi rozeti (botta olan bir rozet) veriliyor. 

\` - \` Premium ücretsiz bir şekilde topladığınız coinler ile alınıyor. Yapmanız gereken botun olduğu bir sunucuda level kasmak her level başı (1,2,3,4 veya 5) coin geliyor. Ve premium 50 coin dir. 

`) 

.setColor('#0099ff') 

button.update({embeds: [embed], components: []}) 

}
          if(button.customId == "pre_al") {

const embed =new Discord.MessageEmbed() 

.setDescription(`❔ **${button.guild.name}** Adlı sunucuya \`50\` coin karşılığında premium almak istediğine emin misin? 

`) 

.setColor('#0099ff') 

const row = new MessageActionRow() 

.addComponents(

new MessageButton()

.setStyle("SUCCESS") 

.setLabel("Evet")

.setEmoji("✅")

.setCustomId("pre_evet"), 
    new MessageButton()

.setStyle("DANGER") 

.setLabel("Hayır")

.setEmoji("❌") 

.setCustomId("pre_hayır")

);

button.update({embeds: [embed], components: [row]}) 

}
if(button.customId == "pre_evet") {

let coin = db.fetch(`coin_${button.user.id}`) 
if (!coin) return button.update({content: "❌ Ne yazıkki en az 50 coinin olması lazım.", components: []});


  if (coin < 50) return button.update({content: "❌ Ne yazıkki en az 50 coinin olması lazım.", components: []});

const embed = new Discord.MessageEmbed() 

.setDescription(`✅ Başarılı. 

`) 

.setColor('#0099ff') 

button.update({embeds: [embed], components: []}) 

 button.channel.send({content: `${button.user} **|** **${button.guild.name}** Adlı sunucu için başarı ile premium sistemini aktif ettiniz.`})

db.subtract(`coin_${button.user.id}`, 50) 

db.set(`pre_sunucu_${button.guild.id}`, "⭐")

db.set(`pre_${button.user.id}`, "⭐") 

db.set(`early_${button.user.id}`, "<:early:855750547143524364>") 

}
if(button.customId == "pre_hayır") {

const embed = new Discord.MessageEmbed() 

.setDescription(`❌ Premium alım işlemi iptal edildi! 

`) 

.setColor('#ff2400') 

button.update({embeds: [embed], components: []}) 

} 
    if(button.customId == "oy_duyuru") {

let rol = "906177384485642240";

if (button.member.roles.cache.get(rol)) {

      await button.member.roles.remove(rol);

button.reply({content: `<:blurplecheck:881423053245009990> I successfully took on the role <@&`+ rol +`>.`, ephemeral: true}) 

    } else {

      await button.member.roles.add(rol);

button.reply({content: `<:blurplecheck:881423053245009990> I successfully gave you the role <@&`+ rol +`>.`, ephemeral: true}) 

    } 

}
    if(button.customId == "tr_dil") {

const embed = new Discord.MessageEmbed() 

.setDescription('✅ Dilin Türkçe oldu!') 

.setColor('#0099ff')

button.update({embeds: [embed], components: []}) 

db.set(`dil_${button.user.id}`, "TR")

} 

if(button.customId == "en_dil") {

const embed = new Discord.MessageEmbed() 

.setDescription('✅ Your language is English!') 

.setColor('#0099ff')

button.update({embeds: [embed], components: []}) 

db.delete(`dil_${button.user.id}`)

} 
});

    process.on("unhandledRejection", (reason, promise) => {

    

    return console.log(reason)



    }); 

