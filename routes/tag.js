var models = require('../models/models')

//listing all the tags
exports.list = function(req, res){
  //get the list of tags by type
  var tags = models.Tag.find({}).exec(function (err, docs) {
    if (err)
      return console.log("error", tags);

    //send it back
    res.render('tags', {tags: docs, title: 'List of tags in the DB'});
  });
};