var path = require('path');
var fs = require('fs');
const {validationResult } = require("express-validator")
const bcryptjs = require("bcryptjs")
var modelsUsers = require("../models/user")
module.exports = {

      register: function(req, res){
        res.render('user/register',{styleOn: "register", errors:{}})
      },

      login:function(req, res){
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
                  }) 
            //      res.render('users/users', {name: req.body.name})
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