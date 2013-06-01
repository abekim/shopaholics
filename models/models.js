var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/shopaholics');

var userSchema = mongoose.Schema({
  userId: String,
  name: String,
  first_name: String,
  last_name: String,
  blog: String,
  email: String,
  location: String,
  bio: String
  // _following: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // _followers: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// picture --> **
// who they are
// how many people are following them
// how many they're following
// personal tags

var User = mongoose.model('User', userSchema);

var productSchema = mongoose.Schema({
  name: String,
  priceRange: String
  // overall: Number,
  // soldAt: String,
  // _coupons: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
  // _similarItems: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  // _reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
  // _tags: { type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }
});

var Product = mongoose.model('Product', productSchema);

var couponSchema = mongoose.Schema({
  name: String,
  link: String
});

var Coupon = mongoose.model('Coupon', couponSchema);

var reviewSchema = mongoose.Schema({
  _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  price: Number,
  boughtAt: String,
  overallReview: Number,
  review: String,
  fit: Number,
  value: Number,
  quality: Number
});

var Review = mongoose.model('Review', reviewSchema);

var typeSchema = mongoose.Schema({
  name: String,
  _tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

var Type = mongoose.model('Type', typeSchema);

var tagSchema = mongoose.Schema({
  name: String
});

var Tag = mongoose.model('Tag', tagSchema);

/*
tags
  brand
  color
  PROS/CONS
title
range of prices
aggregated review number 4.5
number of reviews
available at
coupons
looks of people wearing : IMAGE
images: IMAGE
similar items
  users pick out similar
reviews
  price
  bought at
  review
  sliders
    fit
    value
    quality
  overall star review
*/

//why does this use module.exports instead of exports? 
//http://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-nodejs
exports.User = User;
exports.Product = Product;
exports.Coupon = Coupon;
exports.Review = Review;
exports.Tag = Tag;