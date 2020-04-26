var express = require('express');
var  route = express.Router();
var ProjectController = require('../controllers/projectController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'});

route.get('/home', ProjectController.home);

route.post('/test', ProjectController.test);

route.post('/save-project', ProjectController.saveProject);
route.get('/project/:id?', ProjectController.getProject);
route.get('/get-projects', ProjectController.getProjects);
route.put('/project/:id', ProjectController.updateProject);
route.delete('/project/:id', ProjectController.deleteProject);
route.post('/uploadImg/:id', multipartMiddleware, ProjectController.uploadImage);

module.exports = route;