require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content.includes("?")) {
    var rand = Math.floor(Math.random() * 10)
    if (rand < 4) {
      msg.reply("CHEESE")
    }
    else if (rand < 8) {
      msg.reply("PETRIL")
    }
    else if (rand === 8) {
      msg.reply("CHEESOID HATE SELF")
    }
    else if (rand === 9) {
      msg.reply("CHEESOID KILL SELF")
    }
  }
})

client.login(process.env.BOT_TOKEN)
