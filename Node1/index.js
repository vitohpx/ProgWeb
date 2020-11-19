const http = require('http');
const fs = require('fs');

let dir = process.argv[2];
const conteudo = fs.readdirSync(dir);


const server = http.createServer(function (req, res) {
    console.log(conteudo);
    conteudo.forEach(function (element) {
        res.write(element + '\n');
    });
    res.end();

}).listen(2000);
