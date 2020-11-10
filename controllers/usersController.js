var path = require('path');
var fs = require('fs');

module.exports = {

      register: function(req, res){
        res.render('user/register',{styleOn: "register"})
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
            let pathFile = path.join('data','prueba.json')

            let nuevoProduct = fs.readFileSync(pathFile, { encoding: 'utf-8' })

            nuevoProduct = JSON.parse(nuevoProduct)

            nuevoProduct.push({
            ...req.body,
            id: nuevoProduct[nuevoProduct.length - 1].id + 1,
      })

    nuevoProduct = JSON.stringify(nuevoProduct)

    fs.writeFileSync(pathFile, nuevoProduct)

    res.send('Producto creado')
      }

      
  }
  