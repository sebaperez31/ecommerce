const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var DireccionSchema = require("./direccionModel").DireccionSchema;

var ItemSchema = Schema({
    productoId : { type : Schema.ObjectId, ref : "productos" },
    nombre : String,
    precio : Number,
	cantidad: Number
});

var CompraSchema = Schema({
    fecha: { 
        type: Date,
        default: Date.now
    },
    usuarioId : { type : Schema.ObjectId, ref : "usuarios" },
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
    return this.items.reduce((total, item) => total + item.cantidad * item.precio, 0);
});

CompraSchema.set('toJSON', {getters: true, virtuals: true});

var CompraModel = mongoose.model("compras", CompraSchema);

module.exports.CompraModel = CompraModel; 