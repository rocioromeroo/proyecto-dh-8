const productsList = require('../data/productsDataBase')
const indexController = {

  index: function (req, res) {

    let items = productsList.filter(function (valor) {
      if (valor.category == "visitados") {
        return valor
      }
    })
    let esteDato = productsList.filter(function (esteDato) {
      if (esteDato.category == "accesorios") {
        return esteDato
      }
    })

    res.render("index", { items: items, esteAccesorio: esteDato, styleOn: {} })
  },

  search: function (req, res) {
    let data = productsList.map(function(buscar) {
      if(buscar.name.includes(req.query.keywords)) {
        return buscar
      }

    })

    res.render("index'", { data: data })

  },

  myAccount: function (req, res) {
    res.render("user/myAccount", { styleOn: "style" })
  },

}


module.exports = indexController;