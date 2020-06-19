var mongodb = require("./mongodb");

var DireccionSchema = require("./usuarioModel").DireccionSchema;

var ItemSchema = mongodb.Schema({
    productoId : { type : mongodb.Schema.ObjectId, ref : "productos" },
    nombre : String,
    precio : Number,
	cantidad: Number
});

var CompraSchema = mongodb.Schema({
    fecha: { 
        type: Date,
        default: Date.now
    },
    usuarioId: { type : mongodb.Schema.ObjectId, ref : "usuarios" },
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