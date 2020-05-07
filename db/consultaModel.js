var mongodb = require("./mongodb");
var UsuarioSchema = require("./usuarioModel").UsuarioSchema;
var ProductoSchema = require("./productoModel").ProductoSchema;

var RespuestaSchema = mongodb.Schema({
    usuario: UsuarioSchema,
    fecha: Date,
    cuerpo: String
});

var ConsultaSchema = mongodb.Schema({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        required: true
    },
    fecha: { 
        type: Date,
        default: Date.now
    },
    titulo: String,
    cuerpo: String,
    codigo_tienda: {
        type: String,
        required: true
    },
    producto: ProductoSchema,
    respuesta: RespuestaSchema
});

var Consulta = mongodb.model("consultas", ConsultaSchema);

module.exports.Consulta = Consulta; 