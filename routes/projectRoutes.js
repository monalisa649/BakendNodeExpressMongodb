var express = require('express');
var  route = express.Router();
var ProjectController = require('../controllers/projectController');

route.get('/home', ProjectController.home);

route.post('/test', ProjectController.test);

route.post('/save-project', ProjectController.saveProject);

module.exports = route;