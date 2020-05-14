const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var TiendaSchema = Schema({
    nombre: String,
    codigo: {
        type: String,
        required: true,
        unique: true
    }
});

var TiendaModel = mongoose.model("tiendas", TiendaSchema);

module.exports.TiendaModel = TiendaModel;