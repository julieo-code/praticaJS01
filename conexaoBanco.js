function conectaBanco() {
    const mysql = require('mysql')

    this.conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "103190",
        database: "bdteste"
    })
    this.conexao.connect(function(erro){
        if (erro) throw erro;
        console.log('conectado')
    })
}

function inserirDados(nome,senha,trabalho,sexo,tipo_trabalho) {
    this.conexao.query('INSERT INTO pessoa (nome, senha, trabalho, sexo, tipo_pessoa) VALUES (?,?,?,?,?)', [nome,senha,trabalho,sexo,tipo_trabalho], (erro, resultado) => {
        if(erro) throw erro
    })
}

module.exports = { conectaBanco, inserirDados }