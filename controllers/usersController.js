var path = require('path');
var fs = require('fs');
const {validationResult } = require("express-validator")
const bcryptjs = require("bcryptjs")
var modelsUsers = require("../models/user")
module.exports = {

      register: function(req, res){
        res.render("./user/register",{styleOn: "register"})
      },

      login:function(req, res){
            res.render("./user/login",{styleOn: "login"} )
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
      },

      userStore: function(req, res){
            let errors = validationResult(req)
            
            if(errors.isEmpty()) {
                  modelsUsers.create({
                        name: req.body.name,
                        surname:req.body.surname,
                        email :req.body.email,
                        password: bcryptjs.hashSync(req.body.password),
                        images:req.files[0].filename
                  }) 
            //      res.render('users/users', {name: req.body.name})
                  res.render("usuario creado")

            } else {
                  
                  res.render("./user/register", { errors: errors.mapped(), data: req.body })
                  
            // return res.send("error")
            }       
      }

      
  }
  