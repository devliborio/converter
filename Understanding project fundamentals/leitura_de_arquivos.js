const fs = require("fs") // File system

fs.readFile("arquivo-teste.txt", { encoding: 'utf-8' }, (erro, dados) => { // Essa função possue callback

    if (erro) {
        console.log('Ocorreu uma falha durante a leitura do arquivo');
    } else {
        console.log(dados);
    }


}); // Aqui podemos ler um arquivo desejado

// ** Perceba que ao você executar sem explicar para o node qual tipo de arquivo que vai ser lido, ao rodar o index.js perceba o que ele retornou: "<Buffer 4f 6c c3 a1 20 65 75 20 20 63 6f 6d ... 59 more bytes>"73 6f 75 20 75 6d 20 61 72 71 75 69 76 6f 20 64 65 20 74 65 78 74 6f 0d 0a 45 20 65 75 20 66 75 6e 63 69 6f 6e 6f

//** Por isso que toda vez que você quiser ler uma arquivo textual você precisa definiro segundo parâmetro no fs, que nesse caso foi o: {encoding: 'utf-8'} */