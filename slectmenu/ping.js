module.exports = {
    data: {
        id: 'ping'
    },
    async run(client, interaction) {
        interaction.reply('ping!')
    }
}
