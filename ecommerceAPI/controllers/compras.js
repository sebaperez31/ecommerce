const CompraModel = require('../models/compraModel').CompraModel;

function getCompraFromBody(body){
    let compra = {};
    if (body.fecha){
        compra.fecha = body.fecha;
    }
    compra.direccion_de_entrega = body.direccion_de_entrega;
    compra.forma_de_pago = body.forma_de_pago;
    compra.observaciones = body.observaciones;
    compra.codigo_tienda = body.codigo_tienda;
    compra.usuario = getUsuarioFromBody(body);
    compra.items = getItemsFromBody(body);
    return compra;
}

function getUsuarioFromBody(body){

}

function getItemsFromBody(body){

}

module.exports = {
    getAll : async function(req, res, next) {
        let compras = await CompraModel.find({});
        res.json(compras);
    },

    getById : async function(req, res, next) {
        let compra = await CompraModel.findById(req.params.id);
        res.json(compra);
    },

    save : async function(req, res, next) {
        let doc = getCompraFromBody(req.body);
        let compra = new CompraModel(doc);
        let resultado = await compra.save();
        res.json(resultado); 
    },

    delete : async function(req, res, next) {
        let resultado = await CompraModel.remove({ _id: req.params.id });
        res.json(resultado);
    },

    update : async function(req, res, next) {
        let compra = getCompraFromBody(req.body);
        let resultado = await CompraModel.findByIdAndUpdate({ _id: req.params.id }, compra);
        res.json(resultado);
    }
}