const UsuarioModel = require('../models/usuarioModel').UsuarioModel;

module.exports = {
    save : async function(req, res, next) {
        let usuario = new UsuarioModel();
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        usuario.password = req.body.password;
        usuario.telefono = req.body.telefono;
        usuario.rol = req.body.rol;
        usuario.codigo_tienda = req.body.codigo_tienda;
        usuario.direcciones = req.body.direcciones;
        let resultado = await usuario.save();
        res.json(resultado); 
    },

    login : async function(req, res, next) {
        let usuario = await UsuarioModel.findOne({ 
            email : req.body.email,
            password : req.body.password
        });
        if (usuario){
            // OK
            res.status(200).json({ message : "Login exitoso", data : null});
        }
        else{
            // Unauthorized Error    
            res.status(401).json({ message : "Usuario y/o password incorrecto", data : null});
        }
    }
}