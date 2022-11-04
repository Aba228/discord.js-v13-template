module.exports = async (client) => {
    client.user.setPresence({
        activities: [{
            name: "Strelok.js is the best",
            type: 1
        }]
    })

    console.log(`${client.user.tag} is ready. RAM: ${process.memoryUsage().heapUsed / 1024 / 1024}mb, cpu: ${process.cpuUsage().user / 1024 / 1024}%`);
    const commands = [];
    client.commands.each(command => commands.push(command.data));

    client.application.commands.set(commands);
}
