let modelsUsers = require("../models/user")
const {check, body} = require('express-validator')



module.exports = [

      check('email')
      .isEmail().withMessage('No es un email valido'),

      check('password')
      .isLength({min:2}).withMessage('Su clave debe tener almenos 8 caracteres'),
     
]