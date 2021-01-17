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
      .withMessage('Esta descripcion debe tener al menos 20 caracteres')
    
    ];