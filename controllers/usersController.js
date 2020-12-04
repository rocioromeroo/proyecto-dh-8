var path = require("path");
var fs = require("fs");
const usersList = require('../data/usersDataBase')
const productsList = require('../data/productsDataBase');
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
var modelsUsers = require("../models/user");

module.exports = {
  myAccount: function (req, res) {
    let dato = productsList.find(function (valor) {
          if (valor.id == productsList.length) {
            return valor
          }
    })
    let editar = usersList.find(function (buscar) {
      if (buscar.email == res.locals.user ) {
        return buscar
      }
    })
    if(editar == undefined)
      {return res.render("user/login", { errors:{}, styleOn: "login" }) }
      else{ res.render("user/myAccount", { styleOn: "style", dato:dato, editar:editar})}
  },
  
  editPerfil:function (req, res) {
    
    res.render("user/editPerfil", { styleOn: "register"})
  },

  savePerfil:function (req, res) {
        
    res.redirect("users/account")
  },

  login: function (req, res) {
    let errors = {};
    res.render("user/login", { errors, styleOn: "login" });
  },

  processlogin: function (req, res) {
    let errors = validationResult(req);
    let user = modelsUsers.findByEmail(req.body.email);

    if (!user) {
      return res.render("user/login", {
        errors: errors.mapped(),
        styleOn: "login",
      });
    } else if (bcryptjs.compareSync(req.body.password, user.password)) {
      req.session.user = user.email;
      if (req.body.recordame) {
        res.cookie("recordame", user.email, { maxAge: 120 * 1000 });
      }
       res.redirect("users/account");
    } else {
      return res.render("user/login", {
        errors: errors.mapped(),
        styleOn: "login",
      });
    }
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
      modelsUsers.create({
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password),
        name:req.body.name,
        surname:req.body.surname,
        phone:req.body.phone,
        nacimiento:req.body.nacimiento,
      });

      res.redirect("account");
    } else {
      return res.render("user/register", {
        errors: errors.mapped(),
        styleOn: "register",
      });
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
