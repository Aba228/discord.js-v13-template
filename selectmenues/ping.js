module.exports = {
    data: {
        id: 'ping'
    },
    run: async(client, interaction) => {
        interaction.reply("pong!)
    }
}
