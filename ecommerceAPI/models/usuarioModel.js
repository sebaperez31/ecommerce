const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

const DireccionSchema = require('./direccionModel').DireccionSchema;

const ROL_ADMINISTRADOR = "administrador";
const ROL_CLIENTE = "cliente";
const ROLES_USUARIO = [ROL_ADMINISTRADOR, ROL_CLIENTE];

var UsuarioSchema = Schema({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    telefono: String,
    rol: { 
        type: String, 
        enum : ROLES_USUARIO, 
        default: ROL_CLIENTE 
    },
    codigo_tienda: {
        type: String,
        required: true
    },
    direcciones: [DireccionSchema]
});

// No se permiten emails repetidos para la misma tienda pero un mismo email
// puede estar registrado en distintas tiendas
UsuarioSchema.index({codigo_tienda: 1, email: 1}, {unique: true});

var UsuarioModel = mongoose.model("usuarios", UsuarioSchema);

module.exports.UsuarioModel = UsuarioModel; 

module.exports.UsuarioSchema = UsuarioSchema;

module.exports.ROL_ADMINISTRADOR = ROL_ADMINISTRADOR;

module.exports.ROL_CLIENTE = ROL_CLIENTE;