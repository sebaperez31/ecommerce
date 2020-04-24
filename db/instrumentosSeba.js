var Categoria = require("./categoriaModel").Categoria;
var Producto = require("./productoModel").Producto;
var usuarioModel = require("./usuarioModel");
var Usuario = usuarioModel.Usuario;
var Compra = require("./compraModel").Compra;
var Tienda = require("./tiendaModel").Tienda;
var Consulta = require("./consultaModel").Consulta;

// INSTRUMENTOS SEBA

function crearDB() {
    
    const codigoInstrumentosSeba = "T002";

    Tienda.create({
        nombre: "INSTRUMENTOS MUSICALES SEBA",
        codigo: codigoInstrumentosSeba
    });

    // CATEGORIAS

    Categoria.create({
        nombre: "Bajos",
        subcategorias: [{nombre: "Electricos"},{nombre: "Acusticos"},{nombre: "Electroacusticos"},{nombre: "Cuerdas"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    Categoria.create({
        nombre: "Guitarras",
        subcategorias: [{nombre: "Electricas"},{nombre: "Criollas"},{nombre: "Electroacusticas"},{nombre: "Cuerdas"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    Categoria.create({
        nombre: "Percusion",
        subcategorias: [{nombre: "Baterias"},{nombre: "Platillos"},{nombre: "Fierros"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    Categoria.create({
        nombre: "Vientos",
        subcategorias: [{nombre: "Saxos"},{nombre: "Trompetas"},{nombre: "Armonicas"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    // PRODUCTOS

    Producto.create({
        nombre : "Fender Precision Bass Special Edition Noir",
        codigo : "00001",
        precio : 68000,
        descripcion : "El bajo Fender Precision Bass Noir Special Edition integra un micrófono split de bobinado simple con el clásico tono de Fender. Este modelo de edición especial cuenta con un cuerpo de Aliso, acabado en negro satinado y hardware cromado. Un mástil moderno en C ofrece una gran flexibilidad en todo con el diapasón construido en Pau Ferro. Como característica adicional cabe destacar las clavijas open gear, 20 trastes medium jumbo, cejuela de hueso sintético y mucho más.",
        stock : 3,
        nombre_categoria : "Bajos",
        nombre_subcategoria : "Electricos",
        imagenes : [{nombre:"bassfender1.jpg"}, {nombre:"bassfender2.jpg"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    Producto.create({
        nombre : "Gibson Les Paul 2017 Custom Std Historic 1959",
        codigo : "00002",
        precio : 125000,
        descripcion : "El Standard Historic 1959 Standard Les Paul de Gibson Custom ofrece el tono, el aspecto y la sensación del original '59, Sunburst Les Paul que marcó el estándar. Cuenta con una belleza artesanal, un tono Gibson vintage auténtico y detalles históricos, además de tinte de anilina históricamente preciso, la construcción del cuello con adhesivo oculto y la renombrada transferencia de sonido que viene con su cuello largo. Los detalles más importantes que hicieron que la leyenda original sea revivida ingeniosamente para una experiencia de juego vintage convincente.",
        stock : 2,
        nombre_categoria : "Guitarras",
        nombre_subcategoria : "Electricas",
        imagenes : [{nombre:"gibsonlespoul.jpg"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    Producto.create({
        nombre : "Armonica Diatónica Hohner Marine Band",
        codigo : "00003",
        precio : 3200,
        descripcion : "La Marine Band 1896 es la armónica de blues arquetípica. Casi sin cambios desde que fue patentada en 1896, este instrumento icónico encarna la profundidad real del blues como ninguna otra y es el punto de referencia contra la que se juzgan las demás. Inicialmente diseñada para la música folk europea, rápidamente se convirtió en una voz prominente del blues americano a principios del siglo 20, tocada por todos los armonicistas de esta era. Es el soundtrack de los corazones rotos y del baile de toda la noche, praderas interminables y clubs de noche. Como ninguna otra armónica, la Marine Band 1896 es una invitación a que te expreses en la música, una llave para desbloquear tu creatividad. Cuando descubrís esta pieza de historia musical viviente, no solo va a tocar blues. Vas a sentir el blues.",
        stock : 6,
        nombre_categoria : "Vientos",
        nombre_subcategoria : "Armonicas",
        imagenes : [{nombre:"hohnerMarineBand.jpg"}],
        codigo_tienda: codigoInstrumentosSeba
    });

    var platillos = new Producto();
    platillos.nombre = "Platillo Hi Hat P/ Bateria Zildjian Planet Z 14 Nueva Linea";
    platillos.codigo = "00004";
    platillos.precio = 9000;
    platillos.descripcion = "El PLZ14PR es un Hi-hat de 14 fabricado con un 70% de cobre y un 30% de zinc. La serie planet Z es ideal para principiantes, ofrece un precio económico y una excelente calidad. Va desde tonos limpios y nítidos cuando está abierto, a cortos y separados cuando está cerrado.";
    platillos.stock = 10;
    platillos.nombre_categoria = "Percusion";
    platillos.nombre_subcategoria = "Platillos";
    platillos.imagenes = [{nombre:"hihatZildPlanetZ.bmp"}];
    platillos.codigo_tienda = codigoInstrumentosSeba;
    var platillosCreados = false;
    platillos.save((err,product) => {
        if (err) {
            throw err;
        }
        else {
            platillosCreados = true;
            crearCompra();
        }
    });

    var bajoIbanez = new Producto();
    bajoIbanez.nombre = "Bajo Ibanez Tmb-100";
    bajoIbanez.codigo = "00005";
    bajoIbanez.precio = 37000;
    bajoIbanez.descripcion = "Cantidad de trastes: 24. Tipo de madera del cuerpo: MACIZA. Tipo de madera del mástil: Caoba.";
    bajoIbanez.stock = 3;
    bajoIbanez.nombre_categoria = "Bajos";
    bajoIbanez.nombre_subcategoria = "Electricos";
    bajoIbanez.imagenes = [{nombre:"bajoIbanezTmb100.bmp"}];
    bajoIbanez.codigo_tienda = codigoInstrumentosSeba;
    var bajoIbanezCreado = false;
    bajoIbanez.save((err,product) => {
        if (err) {
            throw err;
        }
        else {
            bajoIbanezCreado = true;
            crearCompra();
            crearConsulta();
        }
    });

    // CLIENTES

    var jose = new Usuario();
    jose.nombre = "Jose";
    jose.apellido = "Roldan";
    jose.email = "josesito@hotmail.com";
    jose.password = "test";
    jose.telefono = "15-1234-1234";
    jose.rol = usuarioModel.ROL_CLIENTE;
    jose.codigo_tienda = codigoInstrumentosSeba;
    jose.direcciones = [ 
        {
            calle : "Parodi",
            numero : "1456",
            piso : "",
            departamento : "2",
            codigo_postal : "1678",
            localidad : "Caseros",
            partido : "Tres de Febrero",
            provincia : "Buenos Aires",
            observaciones : "Porton Azul"
        }
    ];
    var joseCreado = false;
    jose.save((err,usuario) => {
        if (err) {
            throw err;
        }
        else {
            joseCreado = true;
            crearCompra();
        }
    });

    // ADMINISTRADOR
    var admin = new Usuario();
    admin.nombre = "Maria";
    admin.apellido = "Gonzalez";
    admin.email = "marugonza@gmail.com";
    admin.password = "jejeje";
    admin.rol = usuarioModel.ROL_ADMINISTRADOR;
    admin.codigo_tienda = codigoInstrumentosSeba;
    var adminCreado = false;
    admin.save((err, usuario) => {
        if (err) {
            throw err;
        }
        else {
            adminCreado = true;
            crearConsulta();
        }
    });

    // COMPRAS

    function crearCompra(){
        if (bajoIbanezCreado && platillosCreados && joseCreado) {
            Compra.create({
                fecha : "2015-04-23",
                usuario : jose,
                codigo_tienda : codigoInstrumentosSeba,
                items : [ 
                    {
                        producto : platillos,
                        cantidad : 1
                    }, 
                    {
                        producto : bajoIbanez,
                        cantidad : 1
                    }
                ],
                total : 15000,
                direccion_de_entrega : jose.direcciones[0]
            });
        }
    }

    // CONSULTA
    function crearConsulta(){
        if (bajoIbanezCreado && adminCreado) {
            Consulta.create({
                nombre: "Mario",
                apellido: "Gonzalez",
                email: "mariog@hotmail.com",
                fecha: "2020-03-23",
                titulo: "Consulta sobre bajo ibanez",
                cuerpo: "Hola!, como estan?. El Bajo Ibanez Tmb-100, es de 4 o 5 cuerdas?. Saludos.",
                codigo_tienda: codigoInstrumentosSeba,
                productoId : bajoIbanez.id,
                respuesta: {
                    usuario: admin,
                    fecha: "2020-04-15",
                    cuerpo: "Hola Mario, el Tmb-100 viene solo con 4 cuerdas. Saludos!." 
                }
            });
        }
    }
}

module.exports.crearDB = crearDB;