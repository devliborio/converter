const fs = require("fs"); // Importando file system para manipular arquivos
const util = require("util"); // Converter para promise

class Writer {
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }


    async Write(filename, data) {

        try {
            await this.writer(filename, data);
            return true;
        } catch (error) {
            return false;

        }

    }
}

module.exports = Writer;