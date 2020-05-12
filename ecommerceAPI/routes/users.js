var express = require('express');
var router = express.Router();
var usuariosController = require('../controllers/usuarios');

router.post('/registro', usuariosController.save);

router.post('/login', usuariosController.login);

module.exports = router;
