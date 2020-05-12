const ProductoModel = require('../models/productoModel').ProductoModel;

module.exports = {
    getAll : async function(req, res, next) {
        let busqueda = {};
        if (req.query.buscar){
            busqueda.nombre = {
                $regex : ".*" + req.query.buscar + ".*"
            };
        }
        let productos = await ProductoModel.find(busqueda);
        res.json(productos);
    },

    getById : async function(req, res, next) {
        let producto = await ProductoModel.findById(req.params.id);
        res.json(producto);
    },

    save : async function(req, res, next) {
        let producto = new ProductoModel();
        producto.nombre = req.body.nombre;
        producto.precio = req.body.precio;
        producto.descripcion = req.body.descripcion;
        producto.stock = req.body.stock;
        producto.nombre_categoria = req.body.nombre_categoria;
        producto.nombre_subcategoria = req.body.nombre_subcategoria;
        producto.codigo_tienda = req.body.codigo_tienda;
        producto.imagenes = req.body.imagenes;
        let resultado = await producto.save();
        res.json(resultado); 
    },

    delete : async function(req, res, next) {
        let resultado = await ProductoModel.remove({ _id: req.params.id });
        res.json(resultado);
    },

    update : async function(req, res, next) {
        let resultado = await ProductoModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.json(resultado);
    }
}