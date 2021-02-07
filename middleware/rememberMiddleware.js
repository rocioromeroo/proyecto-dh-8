const db = require("../database/models");
const { Op } = require("sequelize");

module.exports = function (req, res, next) {
  if (req.session.recordame && !req.session.user) {
    db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user,
        },
      },
    }).then((resultado) => {
      req.session.user = resultado.email;
    });
  }
  next();
};
