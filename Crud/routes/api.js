const express = require('express');
const router = express.Router();

//conexao com o banco
const db = require('../db');

//passar por /api/users
//criar a rota para listar (READ)
router.get('/', (req, res) => {
    //executar a consulta SQL
    db.query('SELECT * FROM users', (err, results) =>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

//rota para o cadastro (CREATE)
router.post('/', (req, res) => {
    const {nome, email} = req.body;

    //executar a instrução SQL;
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).json({id: result.insertId, nome, email});
    });

});

module.exports = router;
