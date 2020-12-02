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
     
    let data = productsList.filter(function (buscar) {
      return (buscar.name.toLowerCase().includes(req.query.keywords.toLowerCase()) || buscar.category.toLowerCase().includes(req.query.keywords.toLowerCase())) 

    })

    console.log(data);

    res.render("viewsSearch",{ data: data, styleOn: "accessories" })

  },

}


module.exports = indexController;