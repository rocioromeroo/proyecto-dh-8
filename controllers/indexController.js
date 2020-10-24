const productsList = require('../data/productsDataBase')
const indexController= {
    
    index:function(req, res){

        let items = productsList.filter(function(valor){
            if (valor.id >= 10 && valor.id <=13 ){
              return valor
            }
          })
        res.render("index", {items: items })
    }
}


module.exports= indexController;