<<<<<<< HEAD
// const modelsUsers = require("../models/user")
// const {check, body} = require('express-validator')
// const fs = require('fs')


// module.exports = [
//       check('name').isLength({min:1}).withMessage('Campo incompleto'),

//       check('surname').isLength({min:1}).withMessage('Campo incompleto'),

//       check('email')
//       .isEmail().withMessage('No es un email valido'),

//       check('password')
//       .isLength({min:8}).withMessage('Su clave debe tener almenos 8 caracteres'),
//       check('password')
//       .isAlphanumeric().withMessage('Su clave debe contener numeros y letras'),
=======
let modelsUsers = require("../models/user")
const {check, body} = require('express-validator')



module.exports = [
>>>>>>> 22134f189646480c499a98a5bc620bd76cfed318

//       // check('passwordRepeat')
//       // .isLength({min:8}).withMessage('Campo incompleto')
//       // .isAlphanumeric().withMessage('Repetir clave'),

<<<<<<< HEAD
//       body('email').custom(function(value){
//            let user = modelsUsers.findByEmail(value)
//            if (user){
//             throw new Error('Este email ya fue utilizado');
//            }
//            else{ return true}
//       })

// ]

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
=======
      check('password')
<<<<<<< HEAD
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
=======
      .isLength({min:6}).withMessage('Su clave debe tener almenos 6 caracteres'),

      body("email").custom(function(value){
            let user = modelsUsers.findByEmail(value)

            if(user) {
                  throw new Error ('Este email ya se encuentra registrado')
            }
            return true
      })
>>>>>>> aa261ea914730995d9696d7fcc4b19a01dc7c650
     
]
>>>>>>> 22134f189646480c499a98a5bc620bd76cfed318
