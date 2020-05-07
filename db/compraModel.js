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
    fecha: { 
        type: Date,
        default: Date.now
    },
    usuario: UsuarioSchema,
    items: [ItemSchema],
    direccion_de_entrega: DireccionSchema,
    forma_de_pago: String,
    observaciones: String,
    codigo_tienda: {
        type: String,
        required: true
    }
});

CompraSchema.virtual('total').get(function(){
    return this.items.reduce((total, item) => total + item.cantidad * item.producto.precio, 0);
});

CompraSchema.set('toJSON', {getters: true, virtuals: true});

var Compra = mongodb.model("compras", CompraSchema);

module.exports.Compra = Compra; 