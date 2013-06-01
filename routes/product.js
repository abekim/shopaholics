var models = require('../models/models')

exports.submitNew = function(req, res) {
  res.render('newProduct', {title: "Add a New Product"});
};

exports.create = function(req, res) {
  console.log('Added a new Product', req.body);
  var product = new models.Product({ name: req.body.name
                                     , priceRange: req.body.price
                                     // blah blah
                                   });

  /*
  title: String,
  priceRange: String,
  overall: Number,
  soldAt: String,
  _coupons: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
  _similarItems: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  _reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' }
  _tags
  */
  product.save(function (err) {
    if (err)
      return console.log("error saving " + product.name);
    res.redirect('/');
  });
};