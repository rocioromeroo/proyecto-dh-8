const { body, check } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Email obligatorio")
    .isEmail()
    .withMessage("El mail debe tener un formato valido"),
  body("email").custom(function (value) {
    return db.User.findOne({
      where: {
        email: value,
      },
    }).then((resultado) => {
      if (!resultado) {
        throw new Error("Este email no se encuentra registrado");
      }
      return true;
    });
  }),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Su clave debe tener al menos 8 caracteres")
    .notEmpty()
    .withMessage("Campo obligatorio"),
];
