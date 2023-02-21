const fs = require('fs'); // Importando File System
const util = require('util');

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile); // Convertendo o fs.readFile para uma função que funciona com o async / await
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, 'utf-8')

        } catch (erro) {
            return undefined;
        }
    }
};

module.exports = Reader;