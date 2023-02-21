var Reader = require("./Classes/Reader"); // Importando leitor para o arquivo principal.
var Processor = require("./Classes/Processor"); // Importando Processador de dados.


var reader = new Reader();

async function main() {
    var data = await reader.Read('./users.csv');
    var processedData = Processor.Process(data);
}

main();