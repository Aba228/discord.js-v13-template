const { readdirSync } = require("node:fs");

function readJSFilesInDirectory(directory) {
    return readdirSync(directory, (error, files) => {
        if (error) return console.error(err);
        return files.filter((file) => file.endsWith(".js"));
    });
}
module.exports = { readJSFilesInDirectory }
