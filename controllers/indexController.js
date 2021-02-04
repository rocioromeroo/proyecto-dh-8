const db = require("../database/models");
const { Op } = require("sequelize");
const indexController = {
  index: function (req, res) {
    let items = db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.eq]: "visitados",
            },
          },
        },
      ],
    });
    let esteDato = db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.eq]: "accesorios",
            },
          },
        },
      ],
    });
    let news = db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.eq]: "novedades",
            },
          },
        },
      ],
    });
    Promise.all([items, esteDato, news]).then(function ([
      items,
      esteDato,
      news,
    ]) {
      res.render("index", {
        items: items,
        esteAccesorio: esteDato,
        novedades: news,
        styleOn: {},
      });
    });
  },

  search: function (req, res) {
    db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.substring]: req.query.keywords,
            },
          },
        },
      ],
    })
      .then((resultado) => {
        res.render("viewsSearch", { data: resultado, styleOn: "accessories" });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};

module.exports = indexController;
