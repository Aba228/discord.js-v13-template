const { Collection, Client, Intents } = require("discord.js")
const { token, intents } = require("./config.json")
const { handleInteractions } = require('./handlers/handleInteractions')
const { handleEvents } = require('./handlers/handleEvents')
client = new Client({ intents: new Intents(intents) });
client.commands = new Collection();
client.buttons = new Collection();
client.selectmenu = new Collection();
client.embedColor = "#8d8382"

handleInteractions(client)
handleEvents(client)

process.on("unhandledRejection", async (reason, promise) => {
    console.log(reason)
});

client.login(token);