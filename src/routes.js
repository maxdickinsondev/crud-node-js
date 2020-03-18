const { Router } = require('express');

const ListarController = require('./app/controllers/ListarController');
const CadastroController = require('./app/controllers/CadastroController');
const UpdateController = require('./app/controllers/UpdateController');
const DeleteController = require('./app/controllers/DeleteController');

const routes = new Router();

routes.post('/projects', CadastroController.store);

routes.get('/projects', ListarController.index);

routes.put('/projects/:id', UpdateController.update);

routes.delete('/projects/:id', DeleteController.delete);

module.exports = routes;