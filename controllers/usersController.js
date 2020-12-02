var path = require('path');
var fs = require('fs');
const { validationResult } = require("express-validator")
const usersList = require('../data/usersDataBase')
const productsList = require('../data/productsDataBase');
const bcryptjs = require("bcryptjs")
var modelsUsers = require("../models/user")

module.exports = {
      myAccount: function (req, res) {
            let dato = productsList.find(function (valor) {
                  if (valor.id == productsList.length) {
                    return valor
                  }
            })
            res.render("user/myAccount", { styleOn: "style", dato:dato})
          },
      editPerfil:function (req, res) {
                
            res.render("user/editPerfil", { styleOn: "register"})
          },

      register: function(req, res){
        res.render('user/register',{styleOn: "register", errors:{}})
      },

      login:function(req, res){
            let errors = {}
            res.render("user/login",{errors, styleOn: "login"} )
      },   

      processlogin:function(req, res){
            let errors = validationResult(req)
            let user = modelsUsers.findByEmail(req.body.email)

            if(!user) {
              return res.render('user/login', {errors: errors.mapped(), styleOn: "login"})

            } else if (bcryptjs.compareSync(req.body.password, user.password)) {
                req.session.user = user.email     

               if(req.body.recordame) {
                 res.cookie('recordame', user.email, {maxAge: 120 * 1000})                                                        
               }
              return res.render('user/myAccount', {styleOn: "style"})
        
              } else {
                  return res.render('user/login', {errors: errors.mapped(), styleOn: "login"})
              }
          },        
         
      logout:function(req, res){
            res.render("user/login",{styleOn: "login"} )
      },   

      contact:function(req, res){
            res.render("user/contact", {styleOn: "contact"})
      },

      comment:function(req, res){

            let pathFile = path.join('data','comment.json')

            let nuevoMessage = fs.readFileSync(pathFile, { encoding: 'utf-8' })
        
            nuevoMessage = JSON.parse(nuevoMessage)
        
            nuevoMessage.push({
              ...req.body,
              id: nuevoMessage[nuevoMessage.length - 1].id + 1,
            })
        
            nuevoMessage = JSON.stringify(nuevoMessage)
        
            fs.writeFileSync(pathFile, nuevoMessage)
            
            res.send('Mensaje Recibido!!')
      },

      userStore: function(req, res){
            let errors = validationResult(req)

            if(errors.isEmpty()) {
                  modelsUsers.create({    
                        email :req.body.email,
                        password: bcryptjs.hashSync(req.body.password),
                        surname:req.body.surname,
                  }) 

            res.render("user/myAccount", {styleOn:"style"})
            }
            else{

                 return res.render('user/register', {
                        errors: errors.mapped(),
                        styleOn:"register"
                  })
           
             }
     }
}

    
      

      

  

var path = require("path");
var fs = require("fs");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
var modelsUsers = require("../models/user");

module.exports = {
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
      return res.render("user/myAccount", { styleOn: "style" });
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
    return res.render("user/login", { styleOn: "login" });
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
      });

      res.render("user/myAccount", { styleOn: "style" });
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
