var Project = require('../models/projectModel');
var fs = require('fs');
//Arreglo que contiene todos los metodos para interactuar con el modelo y la base de datos
var controller = {

    home: function (req, res) {
        return res.status(200).send({
            message: "Home"
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: "Método del test del controlador de project"
        });
    },
    //Método para guardar un proyecto
    saveProject: function (req, res) {

        var params = req.body;
        var project = new Project();
        project.name = params.name;
        project.description = params.description;
        project.langs = params.langs;
        project.year = params.year;
        project.repository = params.repository;
        project.image = params.image;

        project.save((err, projectStore) => {
            if (err) return res.status(500).send({
                message: 'Error al guardar el documento'
            });

            if (!projectStore) return res.status(404).send({
                message: 'No se ha podido guardar el documento'
            });

            return res.status(200).send({
                project: projectStore
            });
        });


    },
    //Listar un poryecto
    getProject: function (req, res) {
        var projectId = req.params.id;
        if (projectId == null) return res.status(404).send({
            message: 'El id del proyecto no existe'
        });

        Project.findById(projectId, (err, project) => {

            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });
            if (!project) return res.status(404).send({
                message: 'El id del proyecto mo existe'
            });
            return res.status(200).send({
                project
            });
        });
    },
    //Listar todos los proyectos
    getProjects: function (req, res) {
        Project.find({
            /*Aquí puedo poner condiciones*/ }).sort('-year').exec((err, project) => {

            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });

            if (!project) return res.status(404).send({
                message: 'No hay proyectos para mostrar'
            });

            return res.status(200).send({
                project
            });

        });


    },

    updateProject: function(req, res){
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new: true}, (err, projectUpdate) =>{
            if(err) return res.status(500).send({message: 'Se ha producido un error al actualizar los datos'});
        
            if (!projectUpdate) return res.status(404).send({message: 'El proyecto al que hace referencia no existe'});
            
            return res.status(200).send({
                project: projectUpdate
            });
        });
        
    },

        deleteProject: function(req, res){
            var projectId = req.params.id;
            Project.findByIdAndRemove(projectId, (err, projectRemove)=>{
                if(err) return res.status(500).send({message: 'Error al eliminar el proyecto'});
            if(!projectRemove) return res.status(404).send({message: 'No existe el proyecto a eliminar'});

            return res.status(200).send({ project: projectRemove});
            });
            
           },

        uploadImage: function(req , res){

            var projectId = req.params.id;
            var fileName = 'Archivo no subido...';

            if(req.files){
                var filePath = req.files.image.path;
                var fileSplit = filePath.split('\\');
                var filesName = fileSplit[1];
                var extSplit = filesName.split('\.');
                var fileExt = extSplit[1];

                if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                    Project.findByIdAndUpdate(projectId, {image : filesName}, {new: true}, (err, projectUpdate)=>{
                        if(err) return res.status(500).send({message: 'Se ha producido un error'});
                         if(!projectUpdate) return res.status(404).send({message: 'El proyecto no existe'});
                         return res.status(200).send({project: projectUpdate });
                    });
                }else{
                 fs.unlink(filePath, (err)=>{
                    return res.status(200).send({message: 'La extención no es valida'});
                 });
                }

            


            }else{
                return res.status(200).send({message : fileName});
            }


        }
};

module.exports = controller;