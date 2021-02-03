var path = require("path");
var fs = require("fs");
const productsList = require("../data/productsDataBase");
const guaranteeList = require("../data/guaranteeDataBase");
const featuresList = require("../data/featuresDataBase");
const { PreconditionFailed } = require("http-errors");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const usersList = require("../data/usersDataBase");
const db = require('../database/models');
const { Op } = require('sequelize')
const { validationResult } = require("express-validator");

const productsController = {
  products: function (req, res) {
    return db.Product.findAll({
      include: ['category'],
      where: {
        categories_id: {
          [Op.between]: [1, 4]
        }        
      },
      group: 'categories_id',
    })
    .then((resultado) => {  
      console.log(resultado);    
      res.render("./product/product", { items: resultado, styleOn: "product" });
    })
    .catch(function(error){
      console.log(error);
    })   
  },

  category: function (req, res) {
    console.log("algo")
    db.Product.findAll({
      include: [
        {association: 'category',
      where: {
        name: {
          [Op.eq]: req.params.category
        }
      }}
      ]
    })
      .then((resultado) => {
        res.render('./product/category', { items: resultado, styleOn: "accessories"})
      })
      .catch(function(error){
        console.log(error);
      })  
      /* category: function (req, res) {
    let items = productsList.filter(function (valor) {
      return valor.category == req.params.category;
    });
    res.render("./product/category", { items: items, styleOn: "accessories" });
  } */ 
    },

    detail: function (req, res) {
      let items = db.Product.findByPk(req.params.id, {
        include: [
          {association: 'category'
      },
      {association: 'warranty'}
        ]
      })
      let esteDato = db.Product.findAll({
        include: [
          {association: 'category',
        where:{
          name: {
            [Op.eq]: 'accesorios'
          }
        }}
        ]
      });
      Promise.all([items, esteDato])
      .then(function([items, esteDato]) {
        console.log(esteDato);
        res.render("./product/productDetail", {valor: items, esteDato:esteDato, convertir: toThousand, styleOn: "productDetail",})
      })
      .catch((error) => {
        console.log(error);
      })
    // let detalle = productsList.filter(function (valor) {
    //   if (valor.id == req.params.id) {
    //     return valor;
    //   }
    // });

    // let verificar = productsList.filter(function (dato) {
    //   if (dato.category == "accesorios") {
    //     return dato;
    //   }
    // });

    // let detalleAccesorio = verificar.slice(3, 6);

    // let warranty = guaranteeList.filter(function (valor) {
    //   if (valor.id == req.params.id) {
    //     return valor;
    //   }
    // });

    // let caracteristicas = featuresList.filter(function (valor) {
    //   if (valor.id == req.params.id) {
    //     return valor;
    //   }
    // });

    // res.render("./product/productDetail", {
    //   detalle: resultado,
    //   detalleAccesorio: detalleAccesorio,
    //   warranty: warranty,
    //   caracteristicas: caracteristicas,
    //   convertir: toThousand,
    //   styleOn: "productDetail",
    // });
  },

  edit: function (req, res) {
    let editar = db.Product.findByPk(req.params.id)
    let userFind = db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user
        }
      }
    })
    Promise.all([editar, userFind])
    .then(function([editar, userFind]) {
      if (userFind == undefined) {
        return res.render("user/login", { errors: {}, styleOn: "login" });
      } else {
        res.render("./product/editProduct", {
          editar: editar,
          styleOn: "create-editProduct",
        });
      }
    })
    // let editar = productsList.find(function (buscar) {
    //   if (buscar.id == req.params.id) {
    //     return buscar;
    //   }
    // });

    // let userFind = usersList.find(function (buscar) {
    //   if (buscar.email == res.locals.user) {
    //     return buscar;
    //   }
    // });
  },

  update: (req, res) => {
    db.Product.update({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      discount: req.body.discount,
      stock: req.body.stock,
      speed: req.body.speed,
      battery: req.body.battery,
      wheel: req.body.wheel,
      light: req.body.light,
      folding: req.body.folding,
      brake: req.body.brake,
      color: req.body.color,
      weight: req.body.weight
    }, {     
      where: {
        id: {
          [Op.eq]: req.params.id
        }
      }
    })
    .then((resultado) => {
      res.redirect("/products");
    })
    .catch(function(error){
      console.log(error);
    })  
    // let pathFile = path.join("data", "productsDatabase.json");

    // let actualProduct = fs.readFileSync(pathFile, { encoding: "utf-8" });

    // actualProduct = JSON.parse(actualProduct);

    // actualProduct = actualProduct.map(function (buscar) {
    //   if (buscar.id == req.params.id) {
    //     buscar = {
    //       ...req.body,
    //     };
    //     buscar.id = req.params.id;
        
    //     if (req.files.length == []) {
    //       buscar.image = "";
    //     } else {
    //       buscar.image = req.files[0].filename;
    //     }

    //     return buscar;
    //   }
    // });

    // actualProduct = JSON.stringify(actualProduct);

    // fs.writeFileSync(pathFile, actualProduct);

    // res.redirect("/products");
  },

  destroy: (req, res) => {
    db.Product.destroy({
    where: {
      id: {
        [Op.eq]: req.params.id
      }
    }
  })
  .then((resultado) => {
    res.redirect("/products");
  })
  .catch(function(error){
    console.log(error);
  })
    // let pathFile = path.join("data", "productsDatabase.json");
    // let actualProduct = fs.readFileSync(pathFile, { encoding: "utf-8" });
    // actualProduct = JSON.parse(actualProduct);

    // actualProduct = actualProduct.filter(function (buscar) {
    //   if (buscar.id != req.params.id) {
    //     return buscar;
    //   }
    // });

    // actualProduct = JSON.stringify(actualProduct);

    // fs.writeFileSync(pathFile, actualProduct);
    // res.send("Producto Borrado!!");
  },

  create: function (req, res) {
    let findUser =  db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user
        }
      }
    })
    let fcategory = db.Category.findAll({})
    let findWarraty = db.Warranty.findAll({})
    
    Promise.all([findUser, fcategory, findWarraty])
    .then(function([fuser, fcategory, fwarranty]) {
      console.log(fcategory);
      if(fuser) {
        res.render("product/createProduct", {categories: fcategory, warranties:fwarranty, errors:{},styleOn: "create-editProduct" });
      } else {
        return res.render("user/login", { errors:{}, styleOn: "login" })
      }
    })
    .catch(function(error){
      console.log(error);
    })
    // let userFind = usersList.find(function (buscar) {
    //   if (buscar.email == res.locals.user) {
    //     return buscar;
    //   }
    // });

    // if (userFind == undefined) {
    //   return res.render("user/login", { errors: {}, styleOn: "login" });
    // } else {
    //   res.render("product/createProduct", { styleOn: "create-editProduct" });
    // }
  },

  store: function (req, res, next) {
    let errors = validationResult(req);

    console.log(errors);
    if (errors.isEmpty()) {
      // var numbers = {...req.body}
      // console.log(numbers)
      // numbers.filter(function (buscar) {
      //     if (buscar == "si") {
      //       return 1;
      //     }
      //     else{return 0}
      //   });
      if(req.files.length == []) {
      db.Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        discount: req.body.discount,
        stock: req.body.stock,
        speed: req.body.speed,
        battery: req.body.battery,
        wheel: req.body.wheel,
        light: req.body.light,
        folding: req.body.folding,
        brake: req.body.brake,
        color: req.body.color,
        weight: req.body.weight,
        categories_id: req.body.category,
        warranties_id: req.body.warranty
        
      })
      .then((resultado)=> {
        res.redirect("/products" );
      })
      .catch(function(error){
        console.log(error);
      }) 

    }

      else{
        db.Product.create({
          name: req.body.name,
          price: req.body.price,
          description: req.body.description,
          discount: req.body.discount,
          stock: req.body.stock,
          speed: req.body.speed,
          battery: req.body.battery,
          wheel: req.body.wheel,
          light: req.body.light,
          folding: req.body.folding,
          brake: req.body.brake,
          color: req.body.color,
          weight: req.body.weight,
          categories_id: req.body.category,
          warranties_id: req.body.warranty,
          image: req.body.image,

        })
        .then((resultado)=> {
          res.redirect("/products" );
        })
        .catch(function(error){
          console.log(error);
        }) 

      }

    }  else {
      return res.render("product/createProduct", { errors: errors.mapped(), styleOn: "create-editProduct" })
    }
  },

  cart: function (req, res) {
    let userFind = db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user
        }
      }
    });
    let items = db.Product.findAll({
      include: [
        {association: 'category',
      where:{
        name: {
          [Op.eq]: 'visitados'
        }
      }}
      ]
    });
    let esteDato = db.Product.findAll({
      include: [
        {association: 'category',
      where:{
        name: {
          [Op.eq]: 'accesorios'
        }
      }}
      ]
    });
    Promise.all([userFind, items, esteDato])
    .then(function([userFind, items, esteDato]) {
      if (userFind == undefined) {
        return res.render("user/login", { errors: {}, styleOn: "login" });
      } else {
        res.render("./product/productCart", {
          items: items,
          esteAccesorio: esteDato,
          styleOn: "productCart",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    })
    // let items = productsList.filter(function (valor) {
    //   if (valor.category == "visitados") {
    //     return valor;
    //   }
    // });
    // let esteDato = productsList.filter(function (esteDato) {
    //   if (esteDato.category == "accesorios") {
    //     return esteDato;
    //   }
    // });

    // let userFind = usersList.find(function (buscar) {
    //   if (buscar.email == res.locals.user) {
    //     return buscar;
    //   }
    // });

    // if (userFind == undefined) {
    //   return res.render("user/login", { errors: {}, styleOn: "login" });
    // } else {
    //   res.render("./product/productCart", {
    //     items: items,
    //     esteAccesorio: esteDato,
    //     styleOn: "productCart",
    //   });
    // }
  }

};

module.exports = productsController;
