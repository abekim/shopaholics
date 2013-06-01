
/*
 * GET home page.
 */

var models = require('../models/models')

exports.index = function(req, res){
  res.render('index', { title: 'Shopaholics' });
};

