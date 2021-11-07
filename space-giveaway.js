const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const INTENTS = Object.entries(Discord.Intents.FLAGS).filter(([K]) => !["GUILD_PRESENCES", "GUILD_MEMBERS"].includes(K)).reduce((t, [, V]) => t | V, 0)
const client = new Discord.Client({intents: INTENTS}) 
const db = require("croxydb"); 
const {MessageActionRow, MessageButton } = require("discord.js");
client.commands = new Discord.Collection();
const fetch = ("node-fetch");
const fs = require("fs");
require("./utils/loader.js")(client) 

client.login(process.env.TOKEN) 
