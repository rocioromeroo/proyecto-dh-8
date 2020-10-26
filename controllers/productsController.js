const productsList = require('../data/productsDataBase')

const productsController= {

      products: function(req, res){
          res.render("./product/product")
      },

      accessories: function(req, res){
        let items = productsList.filter(function(valor){
          if (valor.category == "accesorios"){
            return valor
          }
        })
        
        res.render('./product/accessories', {items: items})
    },
     
    detail: function(req, res){
      let detalle = productsList.filter(function(valor){
        if (valor.id == req.params.id){
          return valor
        }
      })

      res.render("./product/productDetail", {detalle: detalle})
  },
    
  cart: function(req, res){
    let carrito = productsList.filter(function(valor){
      if (valor.id == req.params.id){
        return valor
      }
    })
      res.render('./product/productCart', {carrito: carrito})
    }
}

    
  
  
  module.exports= productsController;