const CategoriaModel = require('../models/categoriaModel').CategoriaModel;

module.exports = {
    getAll : async function(req, res, next) {
        let busqueda = {};
        if (req.query.nombre){
            busqueda.nombre = req.query.nombre;
        }
        if (req.query.codigo_tienda){
            busqueda.codigo_tienda = req.query.codigo_tienda;
        }
        let categorias = await CategoriaModel.find(busqueda);
        res.json(categorias);
    },

    getById : async function(req, res, next) {
        let categoria = await CategoriaModel.findById(req.params.id);
        res.json(categoria);
    },

    save : async function(req, res, next) {
        let categoria = new CategoriaModel();
        categoria.nombre = req.body.nombre;
        categoria.subcategorias = req.body.subcategorias;
        categoria.codigo_tienda = req.body.codigo_tienda;
        let resultado = await categoria.save();
        res.json(resultado); 
    },

    delete : async function(req, res, next) {
        let resultado = await CategoriaModel.remove({ _id: req.params.id });
        res.json(resultado);
    },

    update : async function(req, res, next) {
        let resultado = await CategoriaModel.findByIdAndUpdate({ _id: req.params.id }, req.body);
        res.json(resultado);
    }
}