var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/users');
var productosRouter = require('./routes/productos');
var tiendasRouter = require('./routes/tiendas');
var categoriasRouter = require('./routes/categorias');
var comprasRouter = require('./routes/compras');

const jwt = require('jsonwebtoken');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/** HEADER INICIO */
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PUT,OPTIONS');
  next();
});
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,x-access-token');
  res.send(200);
});
/** HEADER FIN */

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', validarUsuario, productosRouter);
app.use('/tiendas', tiendasRouter);
app.use('/categorias', categoriasRouter);
app.use('/compras', comprasRouter);

// Validacion de user por token
function validarUsuario(req,res,next){
  jwt.verify(req.headers['x-access-token'], '123456' ,function(err,decoded){
    if(err){
      res.status(401).json({message:err.message})
    }else{
      console.log(decoded)
      req.body.userToken = decoded
      next();
    }
  })
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.json({
    message : err.message,
    error : req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;
