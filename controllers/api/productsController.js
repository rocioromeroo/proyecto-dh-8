const db = require("../../database/models");
const { Op } = require("sequelize");

module.exports = {
  detail: function (req, res) {
        db.Product.findByPk(req.params.id)
        .then(function(product){
           product = {
            include: [{ association: "category" }, { association: "warranty" }],
            meta: {
              status: 200,
              total: product.length,
              url: "/api/products/:id",
              image: product.image
            },
            data: product,
          };
           res.json(product)
        })
}
}
