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

var UsuarioSchema = mongodb.Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    telefono: String,
    rol: String, // "cliente" o "administrador"
    codigo_tienda: String,
    direcciones: [DireccionSchema]
});

var Usuario = mongodb.model("usuarios", UsuarioSchema);

module.exports.Usuario = Usuario; 

module.exports.UsuarioSchema = UsuarioSchema;

module.exports.DireccionSchema = DireccionSchema;

module.exports.ROL_ADMINISTRADOR = ROL_ADMINISTRADOR;

module.exports.ROL_CLIENTE = ROL_CLIENTE;