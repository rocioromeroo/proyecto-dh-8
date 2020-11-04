var path = require('path');
var fs = require('fs');
const productsList = require('../data/productsDataBase');
const { PreconditionFailed } = require('http-errors');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
      image: req.files[0].filename 
    })

    nuevoProduct = JSON.stringify(nuevoProduct)

    fs.writeFileSync(pathFile, nuevoProduct)

    res.send('Producto creado')
  },

    edit:function(req, res, next){
      res.render("./product/editProduct")
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