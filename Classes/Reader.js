const fs = require('fs'); // Importando File System

class Reader {

    Read(filepath) {
        fs.readFile(filepath, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
}

module.exports = Reader;