
var express = require('express');
var bodyParser = require('body-parser');



var app = express();

//Cargar archivos rutas
var project_routes = require('./routes/projectRoutes');

//Middlewares 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Middlewares route

app.use('/', project_routes);


// Cors



//Rutas



//exportar

module.exports = app; 