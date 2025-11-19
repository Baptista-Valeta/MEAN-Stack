// Importando o express

const express = require('express');
const bodyParser = require('body-parser'); // Para converter qualquer pedido feito pela aplicação em objecto JSON

// local imports
const connectDb = require('./db.js');
const employeeRoutes = require("./controllers/employee.controller.js")
const {errorHandler} = require('./midlewares')

const app = express(); // receba o valor retornado pelo método express

// middleware
app.use(bodyParser.json());
app.use("/api/employees", employeeRoutes);
app.use(errorHandler);

// Função assíncrona que lida com a conexão ao mongoDB
connectDb()
    .then(() => {
        console.log('db conectado com sucesso!');

        // Chamar o método listen para iniciar o servidor
        app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));
    })
    .catch(err => console.error('Erro ao iniciar a aplicação: ',err))



