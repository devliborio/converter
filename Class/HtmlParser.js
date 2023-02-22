const ejs = require('ejs'); // Carregando EJS

class HtmlParser {

    static async Parse(table) {
        return await ejs.renderFile("./views/table.ejs", { header: table.header }); // Ele vai pegar o arquivo, ver o que tem dentro dele, e processar o arquivo!
    }
}

module.exports = HtmlParser;