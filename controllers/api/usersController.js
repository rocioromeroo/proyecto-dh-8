const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: function (req, res) {
    db.User.findAll({
      attributes: {
        exclude: [
          "username",
          "password",
          "last_name",
          "address",
          "profile",
          "image",
        ],
      },
    }).then((resultado) => {
      for (let i = 0; i < resultado.length; i++) {
        resultado[i].setDataValue("endpoint", "/api/users/" + resultado[i].id);
      }

      let respuesta = {
        meta: {
          status: 200,
          total: resultado.length,
          url: "/api/users/",
        },
        data: resultado,
      };
      res.json(respuesta);
    });
  },
};
