const db = require('../../database/models');
const { Op } = require('sequelize')



module.exports = {

    list: function(req, res) {

		db.User.findAll({
			
		})
		.then((resultado) => {
			

			let respuesta = {
				meta: {
					status: 200,
					total: resultado.length,
					url: '/api/users/'

				},
				data: resultado
			}
			res.json(respuesta)
		})
    }
 
}