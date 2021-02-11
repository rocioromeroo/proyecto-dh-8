const db = require('../../database/models');
const { Op } = require('sequelize');
const { category } = require('../productsController');

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
    },

    detail: function (req, res) {
      db.Product.findByPk(
        req.params.id,{ include: [{ association: "category" }, { association: "warranty" }],}
      )
      .then((product) => {

         let dato = product.toJSON()
         resultado = {
          meta: {
            status: 200,
            total: product.length,
            url: "/api/products/" + dato.id ,
          },
          data: {
            ...dato, 
            endpoint: "/images/" + dato.category.name + "/" + product.image},
        };
         res.json(resultado)
      })
}
 
}


