<<<<<<< HEAD
const db = require('../../database/models');
const { Op } = require('sequelize')



module.exports = {


    list: function(req, res) {

		db.Product.findAll({
            attributes: { exclude: ["brand","price","discount", "stock", "speed", "battery", "wheel", "light", "folding", "brake", "color", "weight", "image", "createdAt", "updatedAt", "warranties_id"] }

		})
		.then((resultado) => {
			for(let i = 0; i < resultado.length; i++) {
				resultado[i].setDataValue('endpoint', '/api/products/' + resultado[i].id)
			}

			let respuesta = {
				meta: {
					status: 200,
                    total: resultado.length,
					url: '/api/products/'

				},
				data: resultado
			}
			res.json(respuesta)
		})
    }
 
}
=======
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
>>>>>>> 2f50cdb7e03eaa15512a70c36d9fb893cae131ce
