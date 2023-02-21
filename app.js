var Reader = require("./Class/Reader"); // Importando leitor para o arquivo principal.
let Processor = require("./Class/Processor"); // Importando Processador de dados.
let Table = require("./Class/Table"); // Importando Tabela.


let reader = new Reader();

async function main() {
    let data = await reader.Read('./users.csv');
    let processedData = Processor.Process(data);
    let users = new Table(processedData);
}

main();