const CompraModel = require('../models/compraModel').CompraModel;
const ProductoModel = require('../models/productoModel').ProductoModel;

async function getCompraFromBody(body){
    let compra = {};
    if (body.fecha){
        compra.fecha = body.fecha;
    }
    compra.direccion_de_entrega = body.direccion_de_entrega;
    compra.forma_de_pago = body.forma_de_pago;
    compra.observaciones = body.observaciones;
    compra.codigo_tienda = body.codigo_tienda;
    compra.usuarioId = body.usuario_id;
    compra.items = await getItemsFromBody(body);
    return compra;
}

async function getItemsFromBody(body){
    let id_productos = body.items.map(item => item.producto_id);
    let productos = await ProductoModel.find({}).where('_id').in(id_productos);
    let items = [];
    for (let producto of productos){
        items.push({
            productoId : producto._id,
            nombre : producto.nombre,
            precio : producto.precio,
	        cantidad: body.items.find(item => item.producto_id == producto._id).cantidad
        });
    }
    return items;    
}

module.exports = {
    getAll : async function(req, res, next) {
        busqueda = {};
        if (req.query.codigo_tienda){
            busqueda.codigo_tienda = req.query.codigo_tienda;
        }
        if (req.query.usuarioId){
            busqueda.usuarioId = req.query.usuarioId;
        }
        let compras = await CompraModel.find(busqueda);
        res.json(compras);
    },

    getById : async function(req, res, next) {
        let compra = await CompraModel.findById(req.params.id);
        res.json(compra);
    },

    save : async function(req, res, next) {
        let doc = await getCompraFromBody(req.body);
        let compra = new CompraModel(doc);
        let resultado = await compra.save();
        res.json(resultado); 
    },

    delete : async function(req, res, next) {
        let resultado = await CompraModel.remove({ _id: req.params.id });
        res.json(resultado);
    },

    update : async function(req, res, next) {
        let compra = await getCompraFromBody(req.body);
        let resultado = await CompraModel.findByIdAndUpdate({ _id: req.params.id }, compra);
        res.json(resultado);
    }
}