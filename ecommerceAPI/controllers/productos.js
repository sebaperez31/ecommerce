const ProductoModel = require('../models/productoModel').ProductoModel;

module.exports = {
    getAll : function(req, res, next) {
        res.send('Todos los productos');
    },

    getById : function(req, res, next) {
        res.send('Producto x ID');
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
        let data = await producto.save();
        res.json(data); 
    },

    delete : function(req, res, next) {
        res.send('Producto Borrado');
    }
}