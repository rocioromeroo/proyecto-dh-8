const productsController= {

      products: function(req, res){
          res.render("./product/product")
      },

      accessories: function(req, res){
        res.render('./product/accessories')
    },
    

  }
  
  
  module.exports= productsController;