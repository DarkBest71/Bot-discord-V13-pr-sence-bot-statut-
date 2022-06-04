const Discord = require("discord.js")
const { Bot } = require("discord.js")

module.exports = {
run: async(client, message) => {
client.user.setPresence({
  status: "online",
  activities: [
{
  name: "🕊️ Bot actif",
  type: "PLAYING"
}
]
});
},
  name:'ready'
}
