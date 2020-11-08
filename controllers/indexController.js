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

    res.render("index", { items: items, esteAccesorio: esteDato, styleOn:{}})
  }
}


module.exports = indexController;