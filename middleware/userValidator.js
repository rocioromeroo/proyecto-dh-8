let modelsUsers = require("../models/user")
const {check, body} = require('express-validator')



module.exports = [

      check('email')
      .isEmail().withMessage('No es un email valido'),

      check('password')
      .isLength({min:6}).withMessage('Su clave debe tener almenos 6 caracteres'),

      body("email").custom(function(value){
            let user = modelsUsers.findByEmail(value)

            if(user) {
                  throw new Error ('Este email ya se encuentra registrado')
            }
            return true
      })
     
]