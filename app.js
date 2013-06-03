
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , tag = require('./routes/tag')
  , product = require('./routes/product')
  , mongoose = require('mongoose')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//router --> links urls to actual contents
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/products', product.list);
app.get('/products/new', product.submitNew);
app.post('/products/create', product.create);
app.get('/tags', tag.load);
app.post('/tags/create', tag.create);
app.get('/tags/list', tag.list);
app.get('/types/add', tag.addType);
app.post('/types/create', tag.createType);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
