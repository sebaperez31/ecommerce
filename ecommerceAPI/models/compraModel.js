const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var UsuarioSchema = require("./usuarioModel").UsuarioSchema;
var DireccionSchema = require("./direccionModel").DireccionSchema;
var ProductoSchema = require("./productoModel").ProductoSchema;

var ItemSchema = Schema({
	producto: ProductoSchema,
	cantidad: Number
});

var CompraSchema = Schema({
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

var CompraModel = mongoose.model("compras", CompraSchema);

module.exports.CompraModel = CompraModel; 