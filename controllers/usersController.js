module.exports = {

      register: function(req, res){
        res.render('user/register')
      },

      login:function(req, res){
            res.render("user/login")
        },
        
      create: function(req, res){
            res.render("user/create")
      }   

  }
  