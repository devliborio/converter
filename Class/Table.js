class Table{

    constructor(arr){
        this.header = arr[0]; // Pegando o cabeçalho.
        arr.shift(); // Removendo o cabeçalho, para que sobre somente as linhas.
        this.rows = arr; // Pegando as linhas.
    } 

}

module.exports = Table;