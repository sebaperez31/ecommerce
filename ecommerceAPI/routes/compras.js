var express = require('express');
var router = express.Router();
var comprasController = require('../controllers/compras');

router.get('/', comprasController.getAll);

router.get('/:id', comprasController.getById);

router.post('/', comprasController.save);

router.put('/:id', comprasController.update);

router.delete('/:id', comprasController.delete);

module.exports = router;