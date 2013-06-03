var models = require('../models/models')

exports.submitNew = function (req, res) {
  res.render('newProduct', { title: 'Add a New Product' });
};

exports.create = function (req, res) {
  console.log('Added a new Product', req.body);
  
  //create a new Product object
  var product = new models.Product({
    name: req.body.name
    , brand: req.body.brand
    , priceRange: req.body.productPrice
    , _availables: req.body.availables
    , _color: req.body.color
    , _types: req.body.clothingType
    , _bodyType: req.body.bodyType
    , overallReview: 0
  });

  //save the new object to database
  product.save(function (err) {
    if (err)
      return console.log('error saving ' + product.name, err);
    res.redirect('/');
  });
};

exports.list = function (req, res) {
  models.Product.find({}).exec(function (err, docs) {
    if (err)
      return console.log('error listing products', err);
    models.Type.find({}).populate('_tags').exec(function (err, types) {
      if (err)
        return console.log('error listing types', err);
      res.render('products', { types: types, products: docs, title: 'List of products in DB' })
    });
  });
};