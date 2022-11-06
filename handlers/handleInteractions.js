const { readJSFilesInDirectory } = require("./readJSFilesInDirectory");
const { readdirSync } = require("node:fs");

function handleinteractions(client) {
    const secondaryInteractions = ['buttons', 'selectmenues']

    readdirSync('./commands').forEach(directory => {
        const commandFiles = readdirSync(`./commands/${directory}`).filter(file => file.endsWith('.js'))
        for (let i = 0; i < commandFiles.length; i++) {
            const command = require(`../commands/${directory}/${commandFiles[i]}`)
            const commandData = command.data.toJSON()
            client.helpCommands.push({name: commandData.name, description: commandData.description, type: directory})
            client.commands.set(commandData.name, command);
        }
    })

    console.log('\x1b[34m[interactions]\x1b[32m SLASH COMMANDS were registred!\x1b[0m')

    secondaryInteractions.forEach(type => {
        let interactionFiles = readJSFilesInDirectory(`${type}`);
        for (const file of interactionFiles) {
            const secondaryInteractionFile = require(`../${type}/${file}`);
            client[type].set(secondaryInteractionFile.data.id, secondaryInteractionFile)
        }
        console.log(`\x1b[34m[interactions]\x1b[32m ${type.toUpperCase()} were registred!\x1b[0m`)
    })
}

module.exports = { handleinteractions }
