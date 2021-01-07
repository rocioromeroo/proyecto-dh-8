var modelsUser = require('../models/user')
const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = function (req, res, next) {

    if(req.session.recordame && !req.session.user) {
        db.User.findOne({
            where: {
                email: {
                  [Op.eq]: req.session.user
                }
              }
        })
        .then((resultado) => {
            req.session.user = resultado.email
        })
    }
    next()

    // if(req.session.recordame && !req.session.user) {
    //     let user = userData.findByEmail(req.cookie.recordame)
    //     req.session.user = user.email
    // }
    // next()
}
