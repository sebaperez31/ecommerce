var mongodb = require("./mongodb");

var TiendaSchema = mongodb.Schema({
    nombre: String,
    codigo: String
});

var Tienda = mongodb.model("tiendas", TiendaSchema);

module.exports.Tienda = Tienda; 