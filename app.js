let Reader = require("./Class/Reader"); // Importando leitor para o arquivo principal.
let Writer = require("./Class/Writer"); // Importando o escritor 
let Processor = require("./Class/Processor"); // Importando Processador de dados.
let Table = require("./Class/Table"); // Importando Tabela.
let HtmlParser = require("./Class/HtmlParser"); // Importando Conversor de ".csv" para HTMl (string).



let reader = new Reader();
let writer = new Writer();

async function main() {
    let data = await reader.Read('./users.csv');
    let processedData = Processor.Process(data);
    let users = new Table(processedData);
    let html = await HtmlParser.Parse(users);

    writer.Write("htmlConvertido.html", html); // Arquivo gerado pelo escritor, convertendo assim o users.csv para um arquivo HTML com a formatação tabulada.
 
}

main();