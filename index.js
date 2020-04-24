
var mongoose = require('mongoose');
//require('./models/projectModel');

var app = require('./app');
const port = 3700;

//Conexión a baase de datos con mongoose

mongoose.connect('mongodb://localhost:27017/portafolio', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Conexión establecida con la base de datos");

    //Crear servidor para cargar aplicación

    app.listen(port, ()=>{
        console.log('Servidor corriendo correctamente en la url: localhost:',port);
    });

})
.catch(error => handleError(error));





