var mongodb = require("./mongodb");

var DireccionSchema = mongodb.Schema({
    calle: String,
    numero: String,
    piso: String,
    departamento: String,
    codigo_postal: String,
    localidad: String,
    partido: String,
    provincia: String,
    observaciones: String,
});

const ROL_ADMINISTRADOR = "administrador";
const ROL_CLIENTE = "cliente";
const ROLES_USUARIO = [ROL_ADMINISTRADOR, ROL_CLIENTE];

var UsuarioSchema = mongodb.Schema({
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

var Usuario = mongodb.model("usuarios", UsuarioSchema);

module.exports.Usuario = Usuario; 

module.exports.UsuarioSchema = UsuarioSchema;

module.exports.DireccionSchema = DireccionSchema;

module.exports.ROL_ADMINISTRADOR = ROL_ADMINISTRADOR;

module.exports.ROL_CLIENTE = ROL_CLIENTE;