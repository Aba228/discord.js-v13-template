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
    if (interaction.isCommand()) {
        command = client.commands.get(interaction.commandName);

        if (command && command.run) command.run(client, interaction)
        else defaultHandler(interaction);
    }

    if (interaction.isButton()) {
        const button = client.buttons.get(interaction.customId);
        if (!button) return await interaction.reply({
            content: 'Кнопка не найдена!'
        })
        try {
            await button.run(client, interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "Вышла ошибка!",
                ephemeral: true
            });
        };
    }

    if (interaction.isSelectMenu()) {
        const select = client.selectmenu.get(interaction.customId);
        if (!select) return await interaction.reply({
            content: 'меню не найдено!'
        })
        try {
            await select.run(client, interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({
                content: "Вышла ошибка!",
                ephemeral: true
            });
        };
    }
}