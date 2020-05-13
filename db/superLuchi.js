var Categoria = require("./categoriaModel").Categoria;
var Producto = require("./productoModel").Producto;
var usuarioModel = require("./usuarioModel");
var Usuario = usuarioModel.Usuario;
var Compra = require("./compraModel").Compra;
var Tienda = require("./tiendaModel").Tienda;

// SUPERMERCADO LUCHI

function crearDB() {
    
    const codigoSupermercadoLuchi = "T001";

    Tienda.create({
        nombre: "SUPERMERCADO LUCHI",
        codigo: codigoSupermercadoLuchi
    });

    // CATEGORIAS

    Categoria.create({
        nombre: "Almacen",
        subcategorias: [{nombre: "Harinas"},{nombre: "Infusiones"},{nombre: "Aceites y condimentos"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Categoria.create({
        nombre: "Bebidas",
        subcategorias: [{nombre: "Vinos"},{nombre: "Cervezas"},{nombre: "Jugos"},{nombre: "Gaseosas"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Categoria.create({
        nombre: "Carniceria",
        subcategorias: [{nombre: "Carne vacuna"},{nombre: "Cerdo"},{nombre: "Pollo"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Categoria.create({
        nombre: "Verduleria",
        subcategorias: [{nombre: "Frutas"},{nombre: "Verduras"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Categoria.create({
        nombre: "Perfumeria",
        subcategorias: [{nombre: "Jabones"},{nombre: "Perfumes"}, {nombre: "Shampoo y cremas de enjuague"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Categoria.create({
        nombre: "Limpieza",
        subcategorias: [],
        codigo_tienda: codigoSupermercadoLuchi
    });

    // PRODUCTOS

    Producto.create({
        nombre : "Harina Leudante Blancaflor x 1 kg.",
        codigo : "01",
        precio : 68,
        descripcion : "",
        stock : 100,
        nombre_categoria : "Almacen",
        nombre_subcategoria : "Harinas",
        imagenes : [{nombre:"blancaflor1.jpg"}, {nombre:"blancaflor2.jpg"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Producto.create({
        nombre : "Aceite oliva clasico Natura x 500 cc.",
        codigo : "02",
        precio : 334,
        descripcion : "",
        stock : 150,
        nombre_categoria : "Almacen",
        nombre_subcategoria : "Aceites y condimentos",
        imagenes : [{nombre:"naturaOliva500.jpg"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    Producto.create({
        nombre : "Vino Tinto Cavas San Julian Clasico x 750 ml.",
        codigo : "03",
        precio : 90,
        descripcion : "Bodega La Rioja",
        stock : 30,
        nombre_categoria : "Bebidas",
        nombre_subcategoria : "Vinos",
        imagenes : [{nombre:"cabasTintoSJ750.jpg"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    var cerveza = new Producto();
    cerveza.nombre = "Cerveza Heineken en lata x 473 cc.";
    cerveza.codigo = "04";
    cerveza.precio = 70;
    cerveza.descripcion = "";
    cerveza.stock = 200;
    cerveza.nombre_categoria = "Bebidas";
    cerveza.nombre_subcategoria = "Cervezas";
    cerveza.imagenes = [{nombre:"heinekenLata473.bmp"}];
    cerveza.codigo_tienda = codigoSupermercadoLuchi;
    var cervezaCreada = false;
    cerveza.save((err,product) => {
        if (err) {
            throw err;
        }
        else {
            cervezaCreada = true;
            CrearCompra();
        }
    });

    var vacio = new Producto();
    vacio.nombre = "Vacio x kg.";
    vacio.codigo = "05";
    vacio.precio = 452;
    vacio.descripcion = "";
    vacio.stock = 100;
    vacio.nombre_categoria = "Carniceria";
    vacio.nombre_subcategoria = "Vacuna";
    vacio.imagenes = [{nombre:"vacio.bmp"}];
    vacio.codigo_tienda = codigoSupermercadoLuchi;
    var vacioCreado = false;
    vacio.save((err,product) => {
        if (err) {
            throw err;
        }
        else {
            vacioCreado = true;
            CrearCompra();
        }
    });


    Producto.create({
        nombre : "Suprema de pollo x 1 kg.",
        codigo : "06",
        precio : 298,
        descripcion : "",
        stock : 300,
        nombre_categoria : "Carniceria",
        nombre_subcategoria : "Pollo",
        imagenes : [{nombre:"supremaPollo.bmp"}],
        codigo_tienda: codigoSupermercadoLuchi
    });

    // CLIENTES

    var sebastian = new Usuario();
    sebastian.nombre = "Sebastian Gabriel";
    sebastian.apellido = "Perez";
    sebastian.email = "sebaft23@hotmail.com";
    sebastian.password = "test";
    sebastian.telefono = "15-2098-1234";
    sebastian.codigo_tienda = codigoSupermercadoLuchi;
    sebastian.direcciones = [ 
        {
            calle : "Lima",
            numero : "2323",
            piso : "",
            departamento : "2",
            codigo_postal : "1678",
            localidad : "Caseros",
            partido : "Tres de Febrero",
            provincia : "Buenos Aires",
            observaciones : "Porton verde"
        }, 
        {
            calle : "Mendez",
            numero : "2121",
            piso : "2",
            departamento : "F",
            codigo_postal : "1234",
            localidad : "San Andres de Giles",
            partido : "San Andres de Giles",
            provincia : "Buenos Aires",
            observaciones : ""
        }
    ];
    var sebastianCreado = false;
    sebastian.save((err,product) => {
        if (err) {
            throw err;
        }
        else {
            sebastianCreado = true;
            CrearCompra();
        }
    });

    Usuario.create({
        nombre : "Natalia Noemi",
        apellido : "Gomez",
        email : "naty87@gmail.com",
        password : "tetete",
        telefono : "15-1222-1234",
        rol : usuarioModel.ROL_CLIENTE,
        codigo_tienda: codigoSupermercadoLuchi,
        direcciones : [ 
            {
                calle : "Guardia Vieja",
                numero : "1234",
                piso : "",
                departamento : "",
                codigo_postal : "1567",
                localidad : "Merlo",
                partido : "Merlo",
                provincia : "Buenos Aires",
                observaciones : ""
            }
        ]
    });

    // ADMINISTRADOR

    Usuario.create({
        nombre : "Lucia",
        apellido : "Perez",
        email : "luchi77@gmail.com",
        password : "cucucu",
        rol : usuarioModel.ROL_ADMINISTRADOR,
        codigo_tienda: codigoSupermercadoLuchi,
    });

    // COMPRAS

    function CrearCompra(){
        if (vacioCreado && cervezaCreada && sebastianCreado) {
            let compra = new Compra;
            compra.fecha = "2012-04-23";
            compra.usuario = sebastian;
            compra.codigo_tienda = codigoSupermercadoLuchi;
            compra.items = [ 
                {
                    producto : cerveza,
                    cantidad : 2
                }, 
                {
                    producto : vacio,
                    cantidad : 1.5
                }
            ];
            compra.direccion_de_entrega = sebastian.direcciones[0];
            compra.save((err, doc) => {
                if (err) {
                    throw err;
                }
                else {
                    console.log(doc);
                }
            });
        }
    }
}

module.exports.crearDB = crearDB;