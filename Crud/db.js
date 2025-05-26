const mysql = require('mysql2');

const db  = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'c@tolic@',
   database: 'userdb'  
});

//estabelece a conexão
db.connect(err =>{
    if (err) throw err;
    console.log('conectado ao banco de dados');
});

//exporta o módulo
module.exports = db;
