var path = require('path');
var fs = require('fs');
const productsList = require('../data/productsDataBase');
const { PreconditionFailed } = require('http-errors');

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

      let verificar = productsList.filter(function(dato){
        if (dato.category == "accesorios"){
          return dato
        }
      })

      let detalleAccesorio = verificar.slice(3, 6);

      

      res.render("./product/productDetail", {detalle: detalle, detalleAccesorio: detalleAccesorio})
  },
    
  create: function(req, res, next){
    res.render("product/createProduct")
},

store: function (req, res, next) {

    let pathFile = path.join('data','prueba.json')

    let nuevoProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })

    nuevoProduct = JSON.parse(nuevoProduct)

    nuevoProduct.push({
      ...req.body,
      id: nuevoProduct[nuevoProduct.length - 1].id + 1,
    })

    nuevoProduct = JSON.stringify(nuevoProduct)

    fs.writeFileSync(pathFile, nuevoProduct)

    res.send('Producto creado')
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