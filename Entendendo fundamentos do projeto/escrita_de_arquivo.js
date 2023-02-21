const fs = require("fs");

fs.writeFile("arquivo-teste.txt", "Novo conteudo do arquivo, escrito pelo FS!", (err) => {

    if (err) {
        console.log('Erro durante o salvamento!');
    }
    
});