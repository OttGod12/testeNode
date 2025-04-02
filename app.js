const http = require('http');
const assinatura = require('./assinatura')

http.createServer(function (req, res){
    res.end("Hello" + assinatura())
}).listen(8086)

console.log('servidor rodando na porta 8086')
