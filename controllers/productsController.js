const { PreconditionFailed } = require("http-errors");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

const productsController = {
  products: function (req, res) {
    return db.Product.findAll({
      include: ["category"],
      where: {
        categories_id: {
          [Op.between]: [1, 4],
        },
      },
      group: "categories_id",
    })
      .then((resultado) => {
        res.render("./product/product", {
          items: resultado,
          styleOn: "product",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  category: function (req, res) {
    db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.eq]: req.params.category,
            },
          },
        },
      ],
    })
      .then((resultado) => {
        res.render("./product/category", {
          items: resultado,
          styleOn: "accessories",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  detail: function (req, res) {
    let items = db.Product.findByPk(req.params.id, {
      include: [{ association: "category" }, { association: "warranty" }],
    });
    let esteDato = db.Product.findAll({
      include: [{association: "category",
      where: {
            name: {
              [Op.eq]: "accesorios",
            },
          },
        },
      ],
    });
    Promise.all([items, esteDato])
      .then(function ([items, esteDato]) {
        res.render("./product/productDetail", {
          valor: items,
          esteDato: esteDato,
          convertir: toThousand,
          styleOn: "productDetail",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },

  edit: function (req, res) {
    let editar = db.Product.findByPk(req.params.id);
    let userFind = db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user,
        },
      },
    });
    Promise.all([editar, userFind]).then(function ([editar, userFind]) {
      if (userFind == undefined) {
        return res.render("user/login", { errors: {}, styleOn: "login" });
      } else {
        res.render("./product/editProduct", {
          editar: editar,
          styleOn: "create-editProduct",
        });
      }
    });
  },

  update: (req, res) => {
    db.Product.update(
      {
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
      },
      {
        where: {
          id: {
            [Op.eq]: req.params.id,
          },
        },
      }
    )
      .then((resultado) => {
        res.redirect("/products");
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        id: {
          [Op.eq]: req.params.id,
        },
      },
    })
      .then((resultado) => {
        res.redirect("/products");
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  create: function (req, res) {
    let findUser = db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user,
        },
      },
    });
    let fcategory = db.Category.findAll({});
    let findWarraty = db.Warranty.findAll({});

    Promise.all([findUser, fcategory, findWarraty])
      .then(function ([fuser, fcategory, fwarranty]) {
        if (fuser) {
          res.render("product/createProduct", {
            categories: fcategory,
            warranties: fwarranty,
            errors: {},
            styleOn: "create-editProduct",
          });
        } else {
          return res.render("user/login", { errors: {}, styleOn: "login" });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  store: function (req, res, next) {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      if (req.files.length == []) {
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
        })
          .then((resultado) => {
            res.redirect("/products");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
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
          .then((resultado) => {
            res.redirect("/products");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      return res.render("product/createProduct", {
        errors: errors.mapped(),
        styleOn: "create-editProduct",
      });
    }
  },

  cart: function (req, res) {
    let userFind = db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user,
        },
      },
    });
    let items = db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.eq]: "visitados",
            },
          },
        },
      ],
    });
    let esteDato = db.Product.findAll({
      include: [
        {
          association: "category",
          where: {
            name: {
              [Op.eq]: "accesorios",
            },
          },
        },
      ],
    });
    Promise.all([userFind, items, esteDato])
      .then(function ([userFind, items, esteDato]) {
        if (userFind == undefined) {
          return res.render("user/login", { errors: {}, styleOn: "login" });
        } else {
          res.render("./product/productCart", {
            items: items,
            esteAccesorio: esteDato,
            styleOn: "productCart",
            esteDato:{}
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  add: function(req, res){
    if(req.session.cartId) {
      db.Cart.findOne({
        where: {
          id: req.session.cartId
        }
      })
      .then((result) => {
               
        res.send(req.body)
        
      })
      .catch((error) => {
        console.log(error);
      })

    } else {

      db.Cart.create({     
        // quantity: req.body.quantity,
        // unit_price: req.body.unit_price,
        // subtotal: 1000,
        // carts_id:
  
        total_price: 1000,
        users_id: req.session.userId,
        
      })
      .then((result) => {
        req.session.cartId = result.id
        if(result) {
          console.log(result);
          res.send(req.body)
        } else {
          res.send('No se pudo crear el carrito')
        }
      })
      .catch((error) => {
        console.log(error);
      })

    }
  }
};

module.exports = productsController;
