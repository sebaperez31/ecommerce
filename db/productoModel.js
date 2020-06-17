var mongodb = require("./mongodb");

var ImagenSchema = mongodb.Schema({
    nombre: String
});

var ProductoSchema = mongodb.Schema({
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

ProductoSchema.index({codigo_tienda: 1, codigo: 1}, {unique: true});

var Producto = mongodb.model("productos", ProductoSchema);

module.exports.Producto = Producto;

module.exports.ProductoSchema = ProductoSchema;