const express = require('express');
const router = express.Router();

const Employee = require("../models/employee.model");

router.get('/', (req, res) => {
    Employee.find()
        .then(data => res.send(data))
        .catch(err => console.log(err))
});

router.get('/:id', (req, res) => {
    //req.body
    Employee.findById(req.params.id)
        .then(data => {
            if(data) 
                res.send(data);
            else 
                res.status(404).json({
                    error: 'Nenhum registro encontrado para o _id : ' + req.params.id
                })
        })
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    //req.body
    Employee.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => console.log(err))
})

module.exports = router;