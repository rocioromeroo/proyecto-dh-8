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
     


    
    

  }
  
  
  module.exports= productsController;