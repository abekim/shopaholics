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

  //check if the new tag's type exists
  if (!models.Type.find({ name: req.body.type }).length) {
    console.log('Adding new type before adding new tag');

    var type = new models.Type({ name: req.body.name, _tags: [] });

    type.save(function (err) {
      if (err)
        return console.log('error saving new type', err);
    });
  }
  
  //create a new Tag object
  var tag = new models.Tag({ name: req.body.name });

  //save the new object to database
  tag.save(function (err) {
    if (err)
      return console.log("error saving new tag", err);
    type.update({ _tags: type._tags.push(tag._id) });

    type.save(function (err) {
      if (err)
        return console.log('error while adding tag to type', err);
      console.log('successfully added new tag to correct type.');

      res.redirect('/tags');
    })
  });
};

//list tags
exports.list = function (req, res) {
  //get the list of tags by type
  var types = models.Type.find({}).sort({ _id: 1 }).populate('_tags').exec(function (err, docs) {
    if (err)
      return console.log("error looking up tags and their types", err);
    //send it back
    res.render('_tags', { types: docs, title: 'List of tags in the DB' });
  });
};

exports.add = function (req, res) {
  //get the list of tags by type
  var types = models.Type.find({}).sort({ _id: 1 }).exec(function (err, docs) {
    if (err)
      return console.log("error looking up tags and their types", err);
    //send it back
    res.render('newTag', { types: docs, title: 'Add a new tag' });
  });
};

exports.addType = function (req, res) {
  res.render('newType', { title: 'Add a new type of tag' })
};

exports.createType = function (req, res) {
  console.log('Added a new Type', req.body);

  var type = new models.Type({ name: req.body.name, _tags: req.body.tags });

  type.save(function (err) {
    if (err)
      return console.log('error saving new type', err);
  });
};