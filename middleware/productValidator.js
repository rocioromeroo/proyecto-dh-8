const { body, check } = require("express-validator");
let modelsUsers = require("../models/user");
const db = require('../database/models');

module.exports = [
    check('name')
      .notEmpty()
      .withMessage("Campo obligatorio")
      .isLength({min:5})
      .withMessage('El nombre debe tener al menos 5 caracteres'),

    check('description')
      .isLength({min:20})
      .withMessage('Esta descripcion debe tener al menos 20 caracteres'),

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
  ];