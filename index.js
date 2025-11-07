// Importando o express

const express = require('express');
const bodyParser = require('body-parser'); // Para converter qualquer pedido feito pela aplicação em objecto JSON

// local imports
const connectDb = require('./db.js');

const app = express(); // receba o valor retornado pelo método express

// middleware
app.use(bodyParser.json());


connectDb()
    .then(() => {
        console.log('db conectado com sucesso!');

        // Chamar o método listen para iniciar o servidor
        app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));
    })
    .catch(err => console.error(err))