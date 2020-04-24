var mongodb = require("./mongodb");

var usuarioModel = require("./usuarioModel");
var UsuarioSchema = usuarioModel.UsuarioSchema;
var DireccionSchema = usuarioModel.DireccionSchema;

var ProductoSchema = require("./productoModel").ProductoSchema;

var ItemSchema = mongodb.Schema({
	producto: ProductoSchema,
	cantidad: Number
});

var CompraSchema = mongodb.Schema({
    fecha: Date,
    usuario: UsuarioSchema,
    items: [ItemSchema],
    total: Number,
    direccion_de_entrega: DireccionSchema,
    forma_de_pago: String,
    observaciones: String,
    codigo_tienda: String
});

var Compra = mongodb.model("compras", CompraSchema);

module.exports.Compra = Compra; 