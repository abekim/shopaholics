var mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/shopaholics');

/*-- User Model --*/
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

/*-- Product Model --*/
var productSchema = mongoose.Schema({
  name: String,
  priceRange: String,
  brand: String,
  _availables: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shop' }],
  _color: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  _types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  _bodyType: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  overallReview: Number
  // _coupons: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
  // _similarItems: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  // _reviews: { type: mongoose.Schema.Types.ObjectId, ref: 'Review' },
  // _tags: { type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }
});

var Product = mongoose.model('Product', productSchema);

/*-- Shop Model (Sold At / Available At) --*/
var shopSchema = mongoose.Schema({
  name: String,
  link: String
});

var Shop = mongoose.model('Shop', shopSchema);

/*-- Coupon Model --*/
var couponSchema = mongoose.Schema({
  name: String,
  link: String
});

var Coupon = mongoose.model('Coupon', couponSchema);

/*-- User Review Model --*/
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

/*-- Tag Type Model --*/
var typeSchema = mongoose.Schema({
  name: String,
  _tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

var Type = mongoose.model('Type', typeSchema);

/*-- Tag Model --*/
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

exports.User = User;
exports.Product = Product;
exports.Shop = Shop;
exports.Coupon = Coupon;
exports.Review = Review;
exports.Type = Type;
exports.Tag = Tag;