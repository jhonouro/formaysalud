const express = require('express');
const api = express.Router();
const clientController = require('../Controller/clientController');


api.post('/', clientController.create);
api.put('/:id', clientController.update); // el id se espeficifca para enrutar o filtrar directamente por ID
api.delete('/:id', clientController.remove);
api.get('/user', clientController.list);
api.get('/getClient/:id', clientController.getClient);
api.post('/login', clientController.login);

module.exports = api;