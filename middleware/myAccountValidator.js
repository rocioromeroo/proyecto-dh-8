const path = require('path')
const { body, check } = require("express-validator");
let modelsUsers = require("../models/user");
const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = [
    check('first_name')
        .notEmpty()
        .withMessage("Nombre obligatorio")
        .bail()
        .isLength({min:2})
        .withMessage('Su nombre debe tener al menos 2 caracteres')
        .bail(),
    check('last_name')
        .notEmpty()
        .withMessage("Apellido obligatorio")
        .bail()
        .isLength({min:2})
        .withMessage('Su Apellido debe tener al menos 2 caracteres')
        .bail(),
    check('password')
        .notEmpty()
        .withMessage("Contraseña obligatoria")
        .isLength({min:8})
        .withMessage("Su Password debe tener al menos 8 caracteres"),
        
    body("repeat")
        .notEmpty()
        .withMessage("Confirma contraseña")
        .bail()
        .custom((value, { req }) => req.body.password == value)
        .withMessage("Las contraseñas no coinciden"),

    body('image')
        .custom((value, {req}) => {
            if(req.files.length == []) {
                return true
            } else {
                let imagen = (req.files[0].originalname).split('.');
                let allowExt = ['jpg', 'jpeg', 'png', 'gif']
                let existe = allowExt.includes(imagen[1])
                if(existe == false) {
                    throw new Error("La imagen debe ser un archivo valido (JPG, JPEG, PNG, GIF)");
                } else {
                    return true;  
                }
            }
              
        })
]