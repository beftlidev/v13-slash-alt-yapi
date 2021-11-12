const {Collection} = require("discord.js"),
      {readdirSync} = require("fs")
module.exports = (client, interaction) => {
  client.commands = new Collection() 
  var files = readdirSync("./Komutlar")
  var props;
  for(var file in files) {
    props = require("../Komutlar/" + files[file])
    client.commands.set(props.name, props)
    console.log(`🎉 ${props.name} Yüklendi!`) 
  }
  var allFiles = client.commands.map(a => {
    return {name: a.name, description: a.description, options: a.options}
  })
  client.on("ready", async() => {
client.application.commands.set(allFiles) 
      console.log("BOT | Slash command loaded for " + client.guilds.cache.size + ".")
    console.log("BOT | Slash commands loaded successfully.")
    client.user.setPresence({ activities: [{ name: '☕ /invite | 🌐 /language', url :'https://twitch.tv/iugur1', type: 'PLAYING' }] });
}) 
  client.on("interactionCreate", (interaction) => {
    if (!interaction.isCommand()) return;
    if (!client.commands.get(interaction.commandName)) return
    interaction.selectedValue = (interaction.options._hoistedOptions[0]) ? interaction.options._hoistedOptions[0].value : undefined
    const komut = client.commands.get(interaction.commandName)
    komut.run(client, interaction)
  })
} 
