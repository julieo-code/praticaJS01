const express = require('express')
const bodyParser = require('body-parser')
const { conectaBanco, inserirDados } = require('./conexaoBanco')
const app = express()
const url = 'C:\\Users\\julie\\OneDrive\\Área de Trabalho\\JS\\resposta.html'


app.listen(3000, () => {
    console.log('Backend executando...')
})

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {
    conectaBanco()
    if(req.body.senha === req.body.confirmacao) {
        inserirDados(req.body.nome, req.body.senha, req.body.trabalho, req.body.sexo, req.body.tipo)
        res.send(req.body)
    } else {
        res.send('Erro no envio do formulario, pois os campos senha e confirmação de senha estão distintos!')
    }
    
})
