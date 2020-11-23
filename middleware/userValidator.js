const modelsUsers = require("../models/user")
const {check, body} = require('express-validator')
const fs = require('fs')


module.exports = [
      check('name').isLength({min:1}).withMessage('Campo incompleto'),

      check('surname').isLength({min:1}).withMessage('Campo incompleto'),

      check('email')
      .isEmail().withMessage('No es un email valido'),

      check('password')
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