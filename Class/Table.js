class Table {

    constructor(arr) {
        this.header = arr[0]; // Pegando o cabeçalho.
        arr.shift(); // Removendo o cabeçalho, para que sobre somente as linhas.
        this.rows = arr; // Pegando as linhas.
    }

    get RowCount() { // Campo Virtual
        return this.rows.length; // Retornando quantidade de linhas da tabela.
    }

    get ColumCount() { // Campo Virtual
        return this.header.length; // Retornando quantidade de colunas da tabela.
    }

}

module.exports = Table;