var models = require('../models/models')

exports.submitNew = function(req, res) {
  res.render('newProduct', {title: "Add a New Product"});
};

exports.create = function(req, res) {
  console.log('Added a new Product', req.body);
  
  //create a new Product object
  var product = new models.Product({ name: req.body.name
                                     , priceRange: req.body.price
                                     // blah blah
                                   });

  //save the new object to database
  product.save(function (err) {
    if (err)
      return console.log("error saving " + product.name);
    res.redirect('/');
  });
};