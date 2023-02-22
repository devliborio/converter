var pdf = require("html-pdf");

class PDFwriter{

    static writePDF(filename, html){
        pdf.create(html, {}).toFile(filename, (err) => {console.log(err);});
    }

}

module.exports = PDFwriter;