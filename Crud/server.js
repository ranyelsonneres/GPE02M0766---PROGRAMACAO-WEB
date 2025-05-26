const express = require('express');
const app = express();
const port = 3000;

//criar a conexão com o banco
const db = require('./db');

//criar uma rota padrão (/)
app.get('/', (req, res) => {
    res.send("Front funcionando");
});

//linkar com a routes/api
const apiRoutes = require('./routes/api');

app.use(express.json());

app.use('/api/users', apiRoutes);

//ligar o servidor na porta
app.listen(port, () => {
    console.log("Servidor funcionando!");
});
