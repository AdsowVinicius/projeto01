const express       = require('express');
const app           = express();
const db            = require ('./db/connection');
const bodyParser    = require('body-parser');

const PORT = 3000

app.listen( PORT, function(){
    console.log(`o express está funcionando na porta ${PORT}`);
})
//body parser
app.use(bodyParser.urlencoded({ extended: false}))


//db conection
db
    .authenticate()
    .then(() => {
        console.log("conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("ocorreu um erro ao conectar ao banco de dados", err);
    });

// routes
app.get('/', (rep, res) => {
    res.send("esta funcionado 5");
})
// add as rotas dos jobs.js
app.use('/jobs', require('./routes/jobs'));