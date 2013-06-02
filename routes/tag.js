var models = require('../models/models')

//listing all the tags
exports.load = function(req, res){
  //get the list of tags by type
  var tags = models.Type.find({}).sort({ _id: 1 }).exec(function (err, docs) {
    if (err)
      return console.log("error looking up tags and their types", err);
    //send it back
    res.render('tags', { types: docs, title: 'List of tags in the DB' });
  });
};

//create new tag
exports.create = function (req, res) {
  console.log('Added a new Tag', req.body);
  
  //create a new Tag object
  var tag = new models.Tag({ name: req.body.name, type: req.body.type });

  //save the new object to database
  tag.save(function (err) {
    if (err)
      return console.log("error saving " + tag.name);
  });
};

//list tags
exports.list = function (req, res) {
  //get the list of tags by type
  var tags = models.Type.find({}).sort({ _id: 1 }).populate('_tags').exec(function (err, docs) {
    if (err)
      return console.log("error looking up tags and their types", err);
    //send it back
    res.render('_tags', { types: docs, title: 'List of tags in the DB' });
  });
};