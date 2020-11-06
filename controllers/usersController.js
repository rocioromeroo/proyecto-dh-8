var path = require('path');
var fs = require('fs');

module.exports = {

      register: function(req, res){
        res.render('user/register')
      },

      login:function(req, res){
            res.render("user/login")
      },        

      contact:function(req, res){
            res.render("user/contact")
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
            image: req.files[0].filename 
      })

    nuevoProduct = JSON.stringify(nuevoProduct)

    fs.writeFileSync(pathFile, nuevoProduct)

    res.send('Producto creado')
      }

      
  }
  