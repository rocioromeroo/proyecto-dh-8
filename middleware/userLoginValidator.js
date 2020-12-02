const { body, check } = require("express-validator");
let modelsUsers = require("../models/user");


module.exports = [
  check('email').isEmail().withMessage('Este email no es válido'),
  body("email").custom(function (value) {
    
    let user = modelsUsers.findByEmail(value); 
       
    if (!user) {
      throw new Error("Este email no se encuentra registrado");
    }
    return true;
  }),

  check('password').isLength({min:4}).withMessage('Password incorrecto')
];