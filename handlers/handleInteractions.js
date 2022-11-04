const { readJSFilesInDirectory } = require("./readJSFilesInDirectory");
const { readdirSync } = require("node:fs");

function handleInteractions(client) {
    const buttonsFiles = readJSFilesInDirectory('buttons');
    const selectMenuFiles = readJSFilesInDirectory('slectmenu');
    //Elkost is as good as HelLover?
    console.log(`\x1b[34m[INTERACTIONS]\x1b[35m Interactions handler started!\x1b[0m`)

    readdirSync('./commands').forEach(directory => {
        const commandFiles = readdirSync(`./commands/${directory}`).filter(file => file.endsWith('.js'))
        for (let i = 0; i < commandFiles.length; i++) {
            const command = require(`../commands/${directory}/${commandFiles[i]}`)
            const commandData = command.data.toJSON()
            client.commands.set(commandData.name, command);
        }
    })

    console.log('\x1b[34m[INTERACTIONS]\x1b[32m Slash commands was registred!\x1b[0m')

    for (const file of buttonsFiles) {
        const button = require(`../buttons/${file}`);
        client.buttons.set(button.data.id, button)
    }

    console.log('\x1b[34m[INTERACTIONS]\x1b[32m Buttons was registred!\x1b[0m')

    for (const file of selectMenuFiles) {
        const selectmenu = require(`../slectmenu/${file}`);
        client.selectmenu.set(selectmenu.data.id, selectmenu)
    }

    console.log('\x1b[34m[INTERACTIONS]\x1b[32m Select menues was registred!\x1b[0m')
}

module.exports = { handleInteractions }