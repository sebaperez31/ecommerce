const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var ImagenSchema = Schema({
    nombre: String
});

var ProductoSchema = Schema({
    nombre: String,
    codigo: String,
    precio: Number,
    descripcion: String,
    stock: Number,
    nombre_categoria: String,
    nombre_subcategoria: String,
    codigo_tienda: {
        type: String,
        required: true
    },
    imagenes: [ImagenSchema],
    destacado: {
        type: Boolean,
        default: false
    }
});

// El codigo por ahora es opcional pero no quiero que este duplicado en una misma tienda
ProductoSchema.index({codigo_tienda: 1, codigo: 1}, {unique: true});

ProductoSchema.plugin(mongoose.mongoosePaginate);

module.exports.ProductoModel = mongoose.model("productos", ProductoSchema);

module.exports.ProductoSchema = ProductoSchema;