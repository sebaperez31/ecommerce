var mongodb = require("./mongodb");
var UsuarioSchema = require("./usuarioModel").UsuarioSchema;

var RespuestaSchema = mongodb.Schema({
    usuario: UsuarioSchema,
    fecha: Date,
    cuerpo: String
});

var ConsultaSchema = mongodb.Schema({
    nombre: String,
    apellido: String,
    email: String,
    fecha: Date,
    titulo: String,
    cuerpo: String,
    codigo_tienda: String,
    productoId: {type: mongodb.Schema.Types.ObjectId, ref: 'productos'},
    respuesta: RespuestaSchema
});

var Consulta = mongodb.model("consultas", ConsultaSchema);

module.exports.Consulta = Consulta; 