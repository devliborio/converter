class Processor {

    static Process(data) {
        var r = data.split("\r\n"); // \n representa a quebra de linha
        var rows = [];

        r.forEach(row => {
            var arr = row.split(',');
            rows.push(arr);
        });

        return rows;
    }
}


module.exports = Processor;