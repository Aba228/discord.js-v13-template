const { readJSFilesInDirectory } = require("./readJSFilesInDirectory");

function handleEvents(client) {
    console.log(`\x1b[33m[EVENTS]\x1b[36m Events handler started!\x1b[0m`)
    readJSFilesInDirectory('events').forEach(event => {
        const eventRun = require(`../events/${event}`)
        const eventName = event.replace('.js', '')
        client.on(eventName, (...args) => eventRun(client, ...args))
    })
}

module.exports = { handleEvents }