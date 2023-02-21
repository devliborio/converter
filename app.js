var Reader = require("./Classes/Reader"); // Importando leitor para o arquivo principal.

var reader = new Reader();

async function main(){
    var data = await reader.Read('./users.csv');
    console.log(data);
}

main();