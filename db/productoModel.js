var mongodb = require("./mongodb");

var ImagenSchema = mongodb.Schema({
    nombre: String
});

var ProductoSchema = mongodb.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    stock: Number,
    nombre_categoria: String,
    nombre_subcategoria: String,
    codigo_tienda: {
        type: String,
        required: true
    },
    imagenes: [ImagenSchema]
});

var Producto = mongodb.model("productos", ProductoSchema);

module.exports.Producto = Producto;

module.exports.ProductoSchema = ProductoSchema;