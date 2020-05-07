var mongodb = require("./mongodb");

var TiendaSchema = mongodb.Schema({
    nombre: String,
    codigo: {
        type: String,
        required: true,
        unique: true
    }
});

var Tienda = mongodb.model("tiendas", TiendaSchema);

module.exports.Tienda = Tienda; 