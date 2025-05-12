const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! - Teste 2')
})

app.get('/sobre', (req, res) => {
  res.send("Página Sobre")
})

app.use(express.urlencoded({ extended: true }));

app.post("/adicionar", (req, res) => {
  const nome = req.body.nome;
  res.send(`Nome recebido: ${nome}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
