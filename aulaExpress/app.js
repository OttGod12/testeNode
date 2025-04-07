const express = require ('express')
const app = express()
const port = 8086

app.get('/', function(req, res){
    res.send("Bem vindo")
})



app.get('/homepage', function(req, res, next){
    console.log("A resposta está na próxima função")
    next()
},  (req, res) => {
        res.send("Homepage")
    
})


app.get('/ola/:nome/:sobrenome', function(req, res){
    res.send(`Bem vindo, ${req.params.nome} ${req.params.sobrenome}`)
})

//http://localhost:8086/ola2?nome=otavio&sobrenome=nacke
app.get('/ola2', function (req, res) {
    const {nome, sobrenome}  = req.query
    res.send(`Bem vindo, ${nome} ${sobrenome}`)
})

app.get('/endereco', function(req, res ){
    fetch("https://brasilapi.com.br/api/cep/v2/" + '87301-899')
    .then((response) => response.json())
    .then((endereco) => {
        res.send( `Endereco: ${endereco.street}`)
    })
    .catch(error => {
        console.log("erro")
        res.send("ops,erro")
    })
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}...`)

})