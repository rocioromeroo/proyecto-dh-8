const { body, check } = require("express-validator");

module.exports = [
  check("first_name")
    .notEmpty()
    .withMessage("Nombre obligatorio")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Su nombre debe tener al menos 2 caracteres")
    .bail(),
  check("last_name")
    .notEmpty()
    .withMessage("Apellido obligatorio")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Su Apellido debe tener al menos 2 caracteres")
    .bail(),

  body("image").custom((value, { req }) => {
    if (req.files.length == []) {
      return true;
    } else {
      let imagen = req.files[0].originalname.split(".");
      let allowExt = ["jpg", "jpeg", "png", "gif"];
      let existe = allowExt.includes(imagen[1]);
      if (existe == false) {
        throw new Error(
          "La imagen debe ser un archivo valido (JPG, JPEG, PNG, GIF)"
        );
      } else {
        return true;
      }
    }
  }),
];
