var mongodb = require("./mongodb");

var SubcategoriaSchema = mongodb.Schema({
    nombre: String
});

var CategoriaSchema = mongodb.Schema({
    nombre: String,
    subcategorias: [SubcategoriaSchema],
    codigo_tienda: {
        type: String,
        required: true
    }
});

var Categoria = mongodb.model("categorias", CategoriaSchema);

module.exports.Categoria = Categoria; 
