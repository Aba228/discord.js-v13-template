//Syjalo is father of TS
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Xpos is the best'),
    run:
        async (client, interaction) => {
            interaction.reply('Sanya zloy takoy...')
        }
}
