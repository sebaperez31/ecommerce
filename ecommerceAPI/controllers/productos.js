const ProductoModel = require('../models/productoModel').ProductoModel;
const handleErrors = require('./handleErrors');

const getAll = async function(req, res, next) {
    let busqueda = {};
    if (req.query.buscar){
        busqueda.nombre = {
            $regex : ".*" + req.query.buscar + ".*"
        };
    }
    if (req.query.codigo_tienda){
        busqueda.codigo_tienda = req.query.codigo_tienda;
    }
    if (req.query.categoria){
        busqueda.nombre_categoria = req.query.categoria;
    }
    
    let productos = await ProductoModel.find(busqueda);
    res.json(productos);
}

const getById = async function(req, res, next) {
    let producto = await ProductoModel.findById(req.params.id);
    res.json(producto);
}

const save = async function(req, res, next) {
    let producto = new ProductoModel();
    producto.nombre = req.body.nombre;
    producto.codigo = req.body.codigo;
    producto.precio = req.body.precio;
    producto.descripcion = req.body.descripcion;
    producto.stock = req.body.stock;
    producto.nombre_categoria = req.body.nombre_categoria;
    producto.nombre_subcategoria = req.body.nombre_subcategoria;
    producto.codigo_tienda = req.body.codigo_tienda;
    producto.imagenes = req.body.imagenes;
    producto.destacado = req.body.destacado;
    let resultado = await producto.save();
    res.json(resultado); 
}

const del = async function(req, res, next) {
    let resultado = await ProductoModel.remove({ _id: req.params.id });
    res.json(resultado);
}

const update = async function(req, res, next) {
    let resultado = await ProductoModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.json(resultado);
}

const getDestacados = async function(req, res, next) {
    let busqueda = { destacado : true };
    if (req.query.codigo_tienda){
        busqueda.codigo_tienda = req.query.codigo_tienda;
    }
    let destacados = await ProductoModel.find(busqueda);
    res.json(destacados);
}

module.exports = {
    getAll : handleErrors(getAll),

    getById : handleErrors(getById),

    save : handleErrors(save),

    delete : handleErrors(del),

    update : handleErrors(update),

    getDestacados: handleErrors(getDestacados)
}