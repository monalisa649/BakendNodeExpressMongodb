var mongoose = require('mongoose');
var project = mongoose.Schema({
    name: String,
    description: String,
    langs:String,
    repository: String

});

var Project= mongoose.model('Project', project);

module.exports = Project;
