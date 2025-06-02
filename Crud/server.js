const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //caminho dos arquivos estáticos

//criar a conexão com o banco
const db = require('./db');

//disponibilizar os arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//criar uma rota padrão (/)
app.get('/', (req, res) => {
    //res.send("Front funcionando");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//linkar com a routes/api
const apiRoutes = require('./routes/api');
app.use(express.json());
app.use('/api/users', apiRoutes); //alcançar as rotas criadas

//ligar o servidor na porta
app.listen(port, () => {
    console.log("Servidor funcionando!");
});
