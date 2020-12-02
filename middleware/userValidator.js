const { body, check } = require("express-validator");
let modelsUsers = require("../models/user");


module.exports = [
  check('email').isEmail().withMessage('El mail debe tener un formato valido'),
  body("email").custom(function (value) { 
    
    let user = modelsUsers.findByEmail(value); 
       
    if (user) {
      throw new Error("Este email ya se encuentra registrado");
    }
    return true;
  }),

  check('password').isLength({min:4}).withMessage('Su clave debe tener almenos 4 caracteres')
];

