var models = require('../models/models')

//render `/tags` page
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
  console.log('Adding a new Tag', req.body);

  //check if the Type object exists
  models.Type.findOne({ name: req.body.type }).exec(function (err, doc) {
    if (err)
      return console.log("error looking up type with the name, " + req.body.type);

    //when we want to add a functionality where people can add type of tags while they're adding a tag, we can just do the following:
    //if the type doesn't exist...
    //if(!doc.length) {
      //create new type and then run the code below
    //}

    //create new Tag object
    var tag = new models.Tag({ name: req.body.name });

    //save it to db
    tag.save(function (err) {
      if (err)
        return console.log('error saving new tag', err);
      
      //get current tags in type
      var tagList = doc._tags;

      //update the type with new taglist that includes new tag
      doc.update({ _id: doc._id, _tags: tagList.push(tag._id) });

      //save the motherfuckerr
      doc.save(function (err) {
        if (err)
          return console.log('error saving new tag to correct type', err);
        console.log('successfully saved tag to its type');
      });
    })
  });
};

//list all existing tags
exports.list = function (req, res) {
  //get the list of tags by type
  var types = models.Type.find({}).populate('_tags').exec(function (err, docs) {
    if (err)
      return console.log("error looking up tags and their types", err);
    
    //send it back
    res.render('_tags', { types: docs });
  });
};

// //in case the new tag form on `/tags` breaks, uncomment and go to `/tags/new`
// //adding new tags
// exports.add = function (req, res) {
//   //get the list of tags by type
//   var types = models.Type.find({}).exec(function (err, docs) {
//     if (err)
//       return console.log("error looking up tags and their types", err);
//     //send it back
//     res.render('newTag', { types: docs, title: 'Add a new tag' });
//   });
// };

//add a new type of tag (ie. brand, color, etc)
exports.addType = function (req, res) {
  res.render('newType', { title: 'Add a new type of tag' });
};

exports.createType = function (req, res) {
  console.log('Adding a new Type', req.body);

  var type = new models.Type({ name: req.body.name, _tags: [] });

  type.save(function (err) {
    if (err)
      return console.log('error saving new type', err);
  });
};