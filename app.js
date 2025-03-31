import express from 'express';
import { ler, inserir, lerUM, excluirUmAluno } from './src/aluno.js';

const app = express();
const porta = 3000;

// habilitando para dar suporte ao formato JSON
app.use(express.json());

// habilitando para dar suporte a dados inseridos a partir de inputs de formuário
app.use(express.urlencoded({extended:true}));

/* Configurando ROTAS */

/* Raiz da API */
app.get('/', (req, res) => {
    res.send(`API utilizando Node.js, Express e MYSQL`);
});

// exibindo Todos os alunos
app.get('/alunos', (req, res) => {
    //res.send(`Exibindo todos os alunos`);
    ler(res);
});

// Exibindo um aluno
app.get('/alunos/:id', (req, res) => {
    // res.send(`Exibindo dados de UM aluno`);

    // capturando o ID que vem do endpont
    const id = parseInt(req.params.id);

    // chamando a função
    lerUM(id, res);
});

// INSERINDO/CADASTRANDO/ADICIONANDO um aluno
app.post('/alunos', (req, res) => {
    // res.send(`Inserindo UM aluno`);

    // capturar os dados apartir do corpo da requisição
    const novoAluno = req.body;

    // executando a função inserir e passando os parâmetro novoAluno e res
    inserir(novoAluno, res);
});

// Atualizando aluno
// app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizando dados do aluno`);
// });

// Excluindo aluno
app.delete('/alunos/:id', (req, res) => {
    // res.send(`Aluno excluido com sucesso!`);

    // capturando o id
    const id = parseInt(req.params.id);

    excluirUmAluno(id, res);
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});