var models = require('../models/models')

//listing all the tags
exports.list = function(req, res){
  //get the list of tags by type
  var tags = models.Type.find({}).sort({ _id: 1 }).populate('_tags').exec(function (err, docs) {
    if (err)
      return console.log("error looking up tags and their types", err);
    //send it back
    res.render('tags', { types: docs, title: 'List of tags in the DB' });
  });
};