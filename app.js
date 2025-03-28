import express from 'express';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send(`API utilizando Node.js, Express e MYSQL`);
});

app.get('/alunos', (req, res) => {
    //res.send(`Exibindo todos os alunos`);
    ler(res);
});

// Exibindo um aluno
app.get('/alunos/:id', (req, res) => {
    res.send(`Exibindo dados de UM aluno`);
});

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    res.send(`Inserindo UM aluno`);
});

// Atualizando aluno
app.patch('alunos/:id', (req, res) => {
    res.send(`Atualizando dados do aluno`);
});

// Excluindo aluno
app.delete('alunos/:id', (req, res) => {
    res.send(`Aluno excluido com sucesso!`);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});