const productsList = require('../data/productsDataBase')

const productsController= {

      products: function(req, res){
          res.render("./product/product")
      },

      accessories: function(req, res){
        res.render('./product/accessories', {productsList: productsList})
    },
    

  }
  
  
  module.exports= productsController;