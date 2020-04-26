
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



// Cors Configurar cabeceras y cors para que el frontend tenga acceso a este backend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Dentro del asterisco va el dominio o dominios permitidos que pueden ingresar a la api en producción
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Rutas



//exportar

module.exports = app; 