const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var ImagenSchema = Schema({
    nombre: String
});

var ProductoSchema = Schema({
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

module.exports.ProductoModel = mongoose.model("productos", ProductoSchema);

module.exports.ProductoSchema = ProductoSchema;