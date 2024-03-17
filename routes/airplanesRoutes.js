const express = require('express');
const airplanesController = require('../controllers/airplanesController');

const router = express.Router();

// Rota para listar todos os aviões
router.get('/', airplanesController.list);

// Rota para cadastrar um novo avião
router.post('/create', airplanesController.create);

// Rota para buscar um avião por ID
router.get('/search/:id', airplanesController.getById);

// Rota para remover um avião por ID
router.delete('/remove/:id', airplanesController.removeById);

// Rota para atualizar um avião por ID
router.put('/update/:id', airplanesController.update);

module.exports = router;
