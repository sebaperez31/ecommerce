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

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/productos', productosRouter);
app.use('/tiendas', tiendasRouter);
app.use('/categorias', categoriasRouter);
app.use('/compras', comprasRouter);

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
