import mysql from 'mysql2'; // importando o módulo

// Conexão LOCAL
// const conexao = mysql.createConnection({
    //host: 'localhost',
    //user: 'root',
    //password: '',
    //database: 'escola-api'
//});

// Conexão REMOTA
const conexao = mysql.createConnection({
    host: 'db4free.net',
    user: 'testebdjp',
    password: '123456789tigre',
    database: 'bancotestejp'
});

// Conectando e passando mensagem (de erro ou sucesso)
conexao.connect( erro => {
    if (erro) {
        console.log(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}.`) // apresenta o host no qual estamos conectado.
    }
});

// exportando o recurso
export default conexao;