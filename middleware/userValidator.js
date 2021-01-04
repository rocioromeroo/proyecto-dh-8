const { body, check } = require("express-validator");
let modelsUsers = require("../models/user");
const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = [
  check('email').isEmail().withMessage('El mail debe tener un formato valido'),
  body("email").custom(function (value) { 
    return db.User.findOne({
      where: {
        email: {
          [Op.eq]: value
        }
      }
    })
    .then((resultado) => {
      if (resultado) {
        throw new Error("Este email ya se encuentra registrado");
      }
      return true;
    })
    .catch((error) => {
      console.log(error);
    })
  }),
       
  // body("email").custom(function (value) {  
  //   let user = modelsUsers.findByEmail(value);      
  //   if (user) {
  //     throw new Error("Este email ya se encuentra registrado");
  //   }
  //   return true;
  // }),

  check('password').isLength({min:4}).withMessage('Su clave debe tener al menos 4 caracteres')
];

