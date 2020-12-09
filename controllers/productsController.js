var path = require('path');
var fs = require('fs');
const productsList = require('../data/productsDataBase');
const guaranteeList = require('../data/guaranteeDataBase');
const featuresList = require('../data/featuresDataBase');
const { PreconditionFailed } = require('http-errors');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const usersList = require('../data/usersDataBase')


const productsController = {

  products: function (req, res) {

    let objet1 = productsList.filter(function (element) {
      return (element.category == "bicicletas")
    })
    let objet2 = productsList.filter(function (element) {
      return (element.category == "monociclos")
    })
    let objet3 = productsList.filter(function (element) {
      return (element.category == "dualciclos")
    })
    let objet4 = productsList.filter(function (element) {
      return (element.category == "monopatines")
    })
    let items = [objet1[1], objet2[2],objet3[1], objet4[0]]

    res.render("./product/product", { items: items, styleOn: "product" })
  },

  category: function (req, res) {

    let items = productsList.filter(function (valor) {
      return (valor.category == req.params.category)
    })
    res.render("./product/category", { items: items, styleOn: "accessories" })
  },

  detail: function (req, res) {
    let detalle = productsList.filter(function (valor) {
      if (valor.id == req.params.id) {
        return valor
      }
    })

    let verificar = productsList.filter(function (dato) {
      if (dato.category == "accesorios") {
        return dato
      }
    })

    let detalleAccesorio = verificar.slice(3, 6);

    let warranty = guaranteeList.filter(function (valor) {
      if (valor.id == req.params.id) {
        return valor
      }
    })

    let caracteristicas = featuresList.filter(function (valor) {
      if (valor.id == req.params.id) {
        return valor
      }
    })

    res.render("./product/productDetail", {
      detalle: detalle,
      detalleAccesorio: detalleAccesorio, warranty: warranty,
      caracteristicas: caracteristicas, convertir: toThousand, styleOn: "productDetail"
    })
  },

  edit: function (req, res, next) {

    let editar = productsList.find(function (buscar) {
      if (buscar.id == req.params.id) {
        return buscar
      }
    })

    let userFind = usersList.find(function (buscar) {
      if (buscar.email == res.locals.user ) {
        return buscar
      }
    })

    if(userFind == undefined) {
        return res.render("user/login", { errors:{}, styleOn: "login" })
      }
    else{
      res.render("./product/editProduct", { editar: editar, styleOn: "create-editProduct" })
    }
  },

  update: (req, res) => {


    let pathFile = path.join('data','prueba.json')

		let actualProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })

		actualProduct = JSON.parse(actualProduct)
		
		actualProduct = actualProduct.map(function(buscar) {
			// console.log(buscar);
			console.log(req.files);
			if(buscar.id == req.params.id) {
        buscar = {...req.body}
        image  = req.files[0].filename
        console.log(image);
				return buscar
			}
		})
		
		
		actualProduct = JSON.stringify(actualProduct)
	
		fs.writeFileSync(pathFile, actualProduct)
		

		res.send('Producto Actualizado!!')


  },

  destroy: (req, res) => {
    let pathFile = path.join('data', 'productsDatabase.json')
    let actualProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })
    actualProduct = JSON.parse(actualProduct)

    actualProduct = actualProduct.filter(function (buscar) {
      if (buscar.id != req.params.id) {
        return buscar
      }
    })

    actualProduct = JSON.stringify(actualProduct)

    fs.writeFileSync(pathFile, actualProduct)
    res.send('Producto Borrado!!')
  },

  create: function (req, res, next) {
    let userFind = usersList.find(function (buscar) {
      if (buscar.email == res.locals.user ) {
        return buscar
      }
    })

    if(userFind == undefined) {
        return res.render("user/login", { errors:{}, styleOn: "login" })
      }
    else{
      res.render("product/createProduct", { styleOn: "create-editProduct" })
  }
  },

  store: function (req, res, next) {

    let pathFile = path.join('data', 'productsDatabase.json')

    let nuevoProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })

    nuevoProduct = JSON.parse(nuevoProduct)

    nuevoProduct.push({
      ...req.body,
      id: nuevoProduct[nuevoProduct.length - 1].id + 1,
      image: req.files[0].filename
    })

    nuevoProduct = JSON.stringify(nuevoProduct)

    fs.writeFileSync(pathFile, nuevoProduct)

    res.redirect('/products')
  },

  cart: function (req, res) {

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

    let userFind = usersList.find(function (buscar) {
      if (buscar.email == res.locals.user ) {
        return buscar
      }
    })

    if(userFind == undefined) {
        return res.render("user/login", { errors:{}, styleOn: "login" })
      }
    else{
      res.render("./product/productCart", { items: items, esteAccesorio: esteDato, styleOn: "productCart" }) 
    }
  }
}


module.exports = productsController;