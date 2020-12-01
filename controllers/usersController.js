var path = require('path');
var fs = require('fs');
const { validationResult } = require("express-validator")
const bcryptjs = require("bcryptjs")
var modelsUsers = require("../models/user")

module.exports = {

      

      login:function(req, res){
            res.render("./user/login",{styleOn: "login"} )
      },   
      
      processlogin: function(req, res) { 
    
            let user = modelsUsers.findByEmail(req.body.email)
        
            if(!user) {
              return res.send('Email Incorrecto')
            } else if (bcryptjs.compareSync(req.body.password, user.password)) {
                req.session.user = user.email                                       
               if(req.body.recordame) {
                 res.cookie('recordame', user.email, {maxAge: 120 * 1000})                                                        
               }
              return res.redirect('/products')
        
              } else {
                return res.send('Password Incorrecto')
              }
          },
      
      logout: function(req, res) {
            req.session.destroy();
            res.cookie('recordame', null, {maxAge: 0});
            return res.redirect('/products');
          },
        
      register: function(req, res){
            let errors = {};
            res.render("./user/register",{styleOn: "register", errors})
          },
      
      userStore: function(req, res){
            let errors = validationResult(req)
            // console.log(errors);
            console.log(req.body)
            if(errors.isEmpty()) {
                  
                  modelsUsers.create({
                        // name: req.body.name,
                        // surname:req.body.surname,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password),
                        // images:req.files[0].filename
                  }) 
            //      res.render('users/users', {name: req.body.name})
                  res.send("usuario creado")

            } else {
                  
                  return res.render("./user/register", { styleOn: "register", errors: errors.mapped() })
                  
            // return res.send("error")
            }       
      },

      myAccount:function(req, res){
            res.render("./user/myAccount",{styleOn: "style"} )
      },

      contact:function(req, res){
            res.render("./user/contact", {styleOn: "contact"})
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
      }

      

      
  }
  