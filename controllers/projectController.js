var Project= require('../models/projectModel');

    var controller = {

    home : function(req, res){
        return res.status(200).send({
            message: "Home"
        });
    },

    test : function(req,res){
        return res.status(200).send({
            message: "Método del test del controlador de project"
        });
    },
    
    saveProject : function(req, res){
        var project = new ProjectModel();

        return res.status(200).send({message: "Méthod save executed "});
        }

    };

    module.exports = controller;