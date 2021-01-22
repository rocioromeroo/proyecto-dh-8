var path = require("path");
var fs = require("fs");
const usersList = require('../data/usersDataBase')
const productsList = require('../data/productsDataBase');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
var modelsUsers = require("../models/user");
const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = {
  myAccount: function (req, res) {
    let dato = productsList.find(function (valor) {
      if (valor.id == productsList.length) {
        return valor
      }
    })    
    
    return db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.session.user
        }
      }
    })
    
    .then((resultado) => {
      if(resultado) {
        
        res.render("user/myAccount", { styleOn: "style", dato: dato, editar: resultado})
      } else {
        return res.render("user/login", { errors:{}, styleOn: "login" })
      }
    })

    // let dato = productsList.find(function (valor) {
    //   if (valor.id == productsList.length) {
    //     return valor
    //   }
    // })
    // let editar = usersList.find(function (buscar) {
    //   if (buscar.email == res.locals.user ) {
    //     return buscar
    //   }
    // })
    // if(editar == undefined)
    //   {return res.render("user/login", { errors:{}, styleOn: "login" }) }
    //   else{ res.render("user/myAccount", { styleOn: "style", dato:dato, editar:editar})}
  },
  
  editPerfil:function (req, res) {
    db.User.findOne({
      where: {
        email: req.session.user,
        id: req.params.id
      }
    })
    .then((resultado) => {
      
      if(resultado) {
        
        res.render("user/editPerfil", { styleOn: "register", editar: resultado, errors:{}})
      } else {
        req.session.destroy();
        res.cookie("recordame", null, { maxAge: 0 });
        return res.redirect("/users/login");
      }
    }) 
    .catch((error) => {
      console.log(error);
    })
  },

  savePerfil:function (req, res) {
    let errors = validationResult(req);
   
    if(errors.isEmpty()) {

      if(req.files.length == []) {
        
        db.User.update({
          username: req.body.username,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          address: req.body.address,
          password: (bcryptjs.hashSync(req.body.password, 10))
          
          
        }, {     
            where: {
              id: {
                [Op.eq]: req.params.id
              }
            }
        })
        
        .then((resultado) => {
          
            if(resultado) {
              res.redirect("/users/account")
            }
        })
        .catch(function(error){
          console.log(error);
        })

      } else {
        
        db.User.update({
          username: req.body.username,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          address: req.body.address,
          password: (bcryptjs.hashSync(req.body.password, 10)),
          image: req.files[0].filename
          
        }, {     
            where: {
              id: {
                [Op.eq]: req.params.id
              }
            }
        })
        
        .then((resultado) => {
            if(resultado) {
              res.redirect("/users/account")
            }
        })
        .catch(function(error){
          console.log(error);
        })

      }

            

    } else {
      db.User.findByPk(req.params.id)
    .then((resultado) => {
      if(resultado) {
        res.render("user/editPerfil", { styleOn: "register", editar: resultado, errors:errors.mapped()})
      }
    }) 
      
    }
  },

  login: function (req, res) {
    let errors = {};
    res.render("user/login", { errors, styleOn: "login" });
  },

  processlogin: function (req, res) {
    let errors = validationResult(req);
    
    db.User.findOne({
      where: {
        email: {
          [Op.eq]: req.body.email
        }
      }
    })
    .then((resultado) => {
      
      if(!resultado) {
        return res.render("user/login", {errors: errors.mapped(), styleOn: "login"});
        
      } else if (bcryptjs.compareSync(req.body.password, resultado.password)) {
        
        req.session.user = resultado.email;
        
        
        if (req.body.recordame) {
          res.cookie("recordame", resultado.email, { maxAge: 120 * 1000 });
        }
        res.redirect("users/account");
      } else {
        return res.render("user/login", {errors: errors.mapped(), styleOn: "login"});
      }
    })
    .catch((error) => {
      console.log(error);
    })
  },

  logout: function (req, res) {
    req.session.destroy();
    res.cookie("recordame", null, { maxAge: 0 });
    return res.redirect("login");
  },

  register: function (req, res) {
    res.render("user/register", { styleOn: "register", errors: {} });
  },

  userStore: function (req, res) {
    let errors = validationResult(req);
    
    if (errors.isEmpty()) {
      db.User.create({
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10),
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        address:req.body.address,
        profile: 'standard',
        image: "default-profile.jpg"
      })
      .then((resultado) => {
        req.session.user = resultado.email;
        res.redirect("account");
      })

      
    } else {
      return res.render("user/register", {errors: errors.mapped(), styleOn: "register"});
    }
  },

  contact: function (req, res) {
    res.render("user/contact", { styleOn: "contact" });
  },

  comment: function (req, res) {
    let pathFile = path.join("data", "comment.json");
    let nuevoMessage = fs.readFileSync(pathFile, { encoding: "utf-8" });
    nuevoMessage = JSON.parse(nuevoMessage);
    nuevoMessage.push({
      ...req.body,
      id: nuevoMessage[nuevoMessage.length - 1].id + 1,
    });
    nuevoMessage = JSON.stringify(nuevoMessage);
    fs.writeFileSync(pathFile, nuevoMessage);
    res.send("Mensaje Recibido!!");
  },
};
