const express = require('express')
const app = express()
const path = require('path'); //1
const port = 3000

app.use(express.static(path.join(__dirname, 'public'))); //2

app.get('/', (req, res) => {
  //res.send('Hello World!')
  //res.sendFile(__dirname + '/public/index.html');
  res.sendFile(path.join(__dirname, 'public', 'index.html')); //3
})

app.get('/blog', (req, res) => {
    //res.send('Hello World!')
    //res.sendFile(__dirname + '/public/blog.html');
    res.sendFile(path.join(__dirname, 'public', 'blog.html')); //3
  })

app.use(express.urlencoded({extended:true}))
app.post('/contato', (req, res) => {
    const {nome, email} = req.body;
    res.send(`Dados recebidos: Nome: ${nome}, Email: ${email}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
