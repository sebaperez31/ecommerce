var express = require('express');
var productosController = require('../controllers/productos');

var router = express.Router();

router.get('/', productosController.getAll);

router.get('/destacados', productosController.getDestacados);

router.post('/', productosController.save);

router.delete('/:id', productosController.delete);

router.get('/:id', productosController.getById);

router.put('/:id', productosController.update);


module.exports = router;
