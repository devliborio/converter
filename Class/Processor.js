class Processor {

    static Process(data) {
        let r = data.split("\r\n"); // \n representa a quebra de linha
        let rows = [];

        r.forEach(row => {
            let arr = row.split(',');
            rows.push(arr);
        });

        return rows;
    }
}


module.exports = Processor;