const TiendaModel = require('../models/tiendaModel').TiendaModel;

module.exports = {
    getAll : async function(req, res, next) {
        let busqueda = {};
        if (req.query.codigo){
            busqueda.codigo = req.query.codigo;
        }
        let tiendas = await TiendaModel.find(busqueda);
        res.json(tiendas);
    },

    getByCodigo : async function(req, res, next) {
        let busqueda = { codigo : req.params.codigo };
        let tienda = await TiendaModel.findOne(busqueda);
        res.json(tienda);
    },

    getById : async function(req, res, next) {
        let tienda = await TiendaModel.findById(req.params.id);
        res.json(tienda);
    },

    save : async function(req, res, next) {
        let tienda = new TiendaModel();
        tienda.nombre = req.body.nombre;
        tienda.codigo = req.body.codigo;
        let resultado = await tienda.save();
        res.json(resultado); 
    },

    delete : async function(req, res, next) {
        let resultado = await TiendaModel.remove({ _id: req.params.id });
        res.json(resultado);
    },

    update : async function(req, res, next) {
        let resultado = await TiendaModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.json(resultado);
    }
}