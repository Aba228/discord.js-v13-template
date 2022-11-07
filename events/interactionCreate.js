//JABA WATCHING YOU

function defaultHandler(interaction) {
    return interaction.reply({
        content: "Что делать в ответ на эту команду, мы ещё не придумали :<",
        allowedMentions: {
            repliedUser: false
        }
    });
}

module.exports = async (client, interaction) => {
    function handleInteraction(interact) {
        if (interact && interact.run) interact.run(client, interaction)
        else defaultHandler(interaction);
    }
    
    if (interaction.isCommand()) return handleInteraction(client.commands.get(interaction.commandName))
    else if (interaction.isButton()) return handleInteraction(client.buttons.get(interaction.customId))
    else return handleInteraction(client.selectmenues.get(interaction.customId))
}
