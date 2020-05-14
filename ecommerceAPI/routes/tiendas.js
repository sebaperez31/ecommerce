var express = require('express');
var router = express.Router();
var tiendasController = require('../controllers/tiendas');

router.get('/', tiendasController.getAll);

router.get('/:id', tiendasController.getById);

router.post('/', tiendasController.save);

router.put('/:id', tiendasController.update);

router.delete('/:id', tiendasController.delete);

module.exports = router;