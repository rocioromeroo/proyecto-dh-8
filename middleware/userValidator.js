let modelsUsers = require("../models/user")
const {check, body} = require('express-validator')



module.exports = [

      check('email')
      .isEmail().withMessage('No es un email valido'),

      check('password')
<<<<<<< HEAD
      .isLength({min:8}).withMessage('Su clave debe tener almenos 8 caracteres'),
      check('password')
      .isAlphanumeric().withMessage('Su clave debe contener numeros y letras'),

      // check('passwordRepeat')
      // .isLength({min:8}).withMessage('Campo incompleto')
      // .isAlphanumeric().withMessage('Repetir clave'),

      body('email').custom(function(value){
           let user = modelsUsers.findByEmail(value)
           if (user){
            throw new Error('Este email ya fue utilizado');
           }
           else{ return true}
      })

]
=======
      .isLength({min:2}).withMessage('Su clave debe tener almenos 8 caracteres'),
     
]
>>>>>>> 22134f189646480c499a98a5bc620bd76cfed318
