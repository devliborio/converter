const fs = require('fs');

fs.readFile("./usuario.json", { encoding: 'utf8' }, (erro, dados) => {

    if (erro) {
        console.log("Ocorreu uma erro na leitura do arquivo!");
    } else {
        var conteudo = JSON.parse(dados); // JSON sendo armazenado na variavel "conteudo", OBS: que o valor que a gente recebe é em TEXTO! POR ISSO QUE UTILZIAMOS O "JSON.parse(dados)" par que ele seja convertido em um objeto javascript.

        conteudo.nome = "Libório Machado Guilherme"; // Transformando o dado do arquivo de texto para Objeto javascript, podemos fazer alterações no conteudo do JSON.
        conteudo.curso = "Formação React.js";
        conteudo.categoria = "React.js";

        console.log(conteudo);

        // ! Agora perceba que essa função NÃO modifica o arquivo original (usuario.json) porque ela só LÊ o arquivo, porem se a gente quiser aplicar esssas alterações que nos fizemos no arquivo original, teremos que escrever nele atraves de outra função, desse jeito:

        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {

            if(erro){
                console.log("Um erro aconteceu durante a escrita!"); 
            } 

        }); // O stringify converte de Objeto para Texto!
    }
});