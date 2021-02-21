const { body, check } = require("express-validator");

module.exports = [ 
      check("password")
      .notEmpty()
      .withMessage("Contraseña obligatoria")
      .isLength({ min: 8 })
      .withMessage("Su Password debe tener al menos 8 caracteres"),
  
    body("repeat")
      .notEmpty()
      .withMessage("Confirma contraseña ")
      .bail()
      .custom((value, { req }) => req.body.password == value)
      .withMessage("Las contraseñas no coinciden")
]
