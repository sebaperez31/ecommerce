const UsuarioModel = require('../models/usuarioModel').UsuarioModel;
const jwt = require('jsonwebtoken');

function isEmpty(str) {
    return (!str || str.length === 0);
} 

function datosUsuarioSuficientes(body){
    return !isEmpty(body.email) && !isEmpty(body.password) && !isEmpty(body.codigo_tienda);
}

async function usuarioExiste(body){
    let usuario = await UsuarioModel.findOne({ 
        email : body.email,
        codigo_tienda : body.codigo_tienda
    });
    return (usuario != null);
}

async function crearUsuario(body){
    let usuario = new UsuarioModel();
    usuario.nombre = body.nombre;
    usuario.apellido = body.apellido;
    usuario.email = body.email;
    usuario.password = body.password;
    usuario.telefono = body.telefono;
    usuario.rol = body.rol;
    usuario.codigo_tienda = body.codigo_tienda;
    usuario.direcciones = body.direcciones;
    let resultado = await usuario.save();
    return resultado;
}

module.exports = {
    save : async function(req, res, next) {
        if (!datosUsuarioSuficientes(req.body)) {
            res.status(422).json({ message : "Los datos de correo electronico, password y tienda son obligatorios", data : null});    
        }
        else if (await usuarioExiste(req.body)) {
            res.status(409).json({ message : "Ya existe un usuario para ese correo electronico y tienda", data : null});
        }
        else {
            let resultado = await crearUsuario(req.body);
            res.status(201).json(resultado);
        }
    },

    login : async function(req, res, next) {
        let usuario = await UsuarioModel.findOne({ 
            email : req.body.email,
            password : req.body.password,
            codigo_tienda : req.body.codigo_tienda
        });
        if (usuario){
            var token = jwt.sign( { usuario : usuario }, "123456", { expiresIn: '1h' });
            res.status(200).json( { message : "Login exitoso", token : token });
        }
        else{ 
            res.status(401).json({ message : "Usuario y/o password incorrecto", data : null});
        }
    }
}