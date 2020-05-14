const mongoose = require("../bin/mongodb");
const Schema = mongoose.Schema;

var DireccionSchema = Schema({
    calle: String,
    numero: String,
    piso: String,
    departamento: String,
    codigo_postal: String,
    localidad: String,
    partido: String,
    provincia: String,
    observaciones: String,
});

module.exports.DireccionSchema = DireccionSchema;