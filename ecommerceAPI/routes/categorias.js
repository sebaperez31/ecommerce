var express = require('express');
var router = express.Router();
var categoriasController = require('../controllers/categorias');

router.get('/', categoriasController.getAll);

router.get('/:id', categoriasController.getById);

router.post('/', categoriasController.save);

router.put('/:id', categoriasController.update);

router.delete('/:id', categoriasController.delete);

module.exports = router;