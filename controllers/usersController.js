module.exports = {

      register: function(req, res){
        res.render('user/register')
      },

      login:function(req, res){
            res.render("user/login")
      },        

      contact:function(req, res){
            res.render("user/contact")
      }

      
  }
  