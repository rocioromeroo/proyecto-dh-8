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