import express from 'express';
import { ler, inserir, lerUM, excluirUmAluno, atualizar } from './src/aluno.js';
import cors from 'cors';

const app = express();
const porta = precess.env.PORT || 3000;

// habilitando para dar suporte ao formato JSON
app.use(express.json());

// habilitando para dar suporte a dados inseridos a partir de inputs de formuário
app.use(express.urlencoded({extended:true}));

app.use(cors());

/* Configurando ROTAS */

/* Raiz da API */
app.get('/', (req, res) => {
   // res.send(`API utilizando Node.js, Express e MYSQL`);
   res.redirect('https://documenter.getpostman.com/view/43562453/2sB2cSi4HF');
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
app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizando dados do aluno`);

    // capturar id
    const id = parseInt(req.params.id);

    // pegando as informações do body
    const aluno = req.body;

    atualizar(id, aluno, res);
 });

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