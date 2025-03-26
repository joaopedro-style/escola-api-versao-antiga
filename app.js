import express from 'express';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send(`API utilizando Node.js, Express e MYSQL`);
});

app.get('/alunos', (req, res) => {
    res.send(`Exibindo todos os alunos`);
});

app.get('/alunos/1', (req, res) => {
    res.send(`Exibindo dados de UM aluno`);
});

app.post('/alunos', (req, res) => {
    res.send(`Exibindo dados de UM aluno`);
});

app.patch('alunos/1', (req, res) => {
    res.send(`Atualizando dados do aluno`);
});

app.delete('alunos/1', (req, res) => {
    res.send(`Aluno excluido com sucesso!`);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});