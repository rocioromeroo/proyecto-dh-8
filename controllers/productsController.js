var path = require('path');
var fs = require('fs');
const productsList = require('../data/productsDataBase');
const guaranteeList = require('../data/guaranteeDataBase');
const featuresList = require('../data/featuresDataBase');
const { PreconditionFailed } = require('http-errors');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productsController= {

  products: function(req, res){

      res.render("./product/product")
  },

  category:  function(req, res){

    let items = productsList.filter(function(valor){
      if (valor.category == req.params.category){
        return valor
      }
    })
    res.render("./product/category",{items: items} )
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

    let warranty = guaranteeList.filter(function(valor){
      if (valor.id == req.params.id){
        return valor
      }
    })
    
    let caracteristicas = featuresList.filter(function(valor){
      if (valor.id == req.params.id){
        return valor
      }
    })

    res.render("./product/productDetail", {detalle: detalle, 
      detalleAccesorio: detalleAccesorio, warranty: warranty, 
      caracteristicas: caracteristicas, convertir: toThousand})
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



  update: (req, res) => {
    let pathFile = path.join('data','prueba.json')
    let actualProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })
    actualProduct = JSON.parse(actualProduct)
    
    
    actualProduct = actualProduct.map(function(buscar) {
        if(buscar.id == req.params.id) {
            buscar.name = req.body.name,
            buscar.price = req.body.price,
            buscar.discount = req.body.discount,
            buscar.category = req.body.category,
            buscar.description = req.body.description
            return buscar
        }
    })
    
    
    actualProduct = JSON.stringify(actualProduct)

    fs.writeFileSync(pathFile, actualProduct)
    
    res.send('Producto Actualizado!!')
},



  destroy : (req, res) => {
    let pathFile = path.join('data','prueba.json')
    let actualProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })
    actualProduct = JSON.parse(actualProduct)
    
    
    actualProduct = actualProduct.filter(function(buscar) {
        if(buscar.id != req.params.id) {
            return buscar
        }
    })

    actualProduct = JSON.stringify(actualProduct)

    fs.writeFileSync(pathFile, actualProduct)
    res.send('Producto Borrado!!')
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