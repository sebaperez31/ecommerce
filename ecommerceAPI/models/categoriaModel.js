const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var SubcategoriaSchema = Schema({
    nombre: String
});

var CategoriaSchema = Schema({
    nombre: String,
    subcategorias: [SubcategoriaSchema],
    codigo_tienda: {
        type: String,
        required: true
    }
});

var CategoriaModel = mongoose.model("categorias", CategoriaSchema);

module.exports.CategoriaModel = CategoriaModel; 
