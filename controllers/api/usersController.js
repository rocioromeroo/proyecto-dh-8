const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = {
  list: function (req, res) {
    db.User.findAll({
      attributes: {
        exclude: [
          "password",
          "profile",
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
  detail: function (req, res) {
    db.User.findByPk(req.params.id, {
      attributes: {
        exclude: [
          "password",
          "profile",
        ],
      },
    })
    .then((usuario) => {

      let dato = usuario.toJSON()
      respuesta = {
        meta: {
        status: 200,
        url: "/api/users/" + dato.id,
      },
      data: {
        ...dato,
        endpoint: "/images/users/" + dato.image
      }
    }
      res.json(respuesta)
    })
},
}
