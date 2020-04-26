var mongoose = require('mongoose');
var project = mongoose.Schema({
    name: String,
    description: String,
    langs:String,
    year: Number,
    repository: String,
    image: String

});

var Project= mongoose.model('Project', project);

module.exports = Project;
