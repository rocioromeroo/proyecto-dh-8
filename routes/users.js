var express = require('express');
const path = require('path');
var router = express.Router();
const usersController = require('../controllers/usersController')
const userValidator = require("../middleware/userValidator")
const userLoginValidator = require("../middleware/userLoginValidator")
var multer  = require('multer');
const myAccountValidator = require('../middleware/myAccountValidator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*        GET       MyAccount   */
router.get('/account', usersController.myAccount)




/*        GET/POST       Register   */
router.get('/register', usersController.register)
router.post('/register', userValidator, usersController.userStore)

/*        GET/POST       Login  */
router.get('/login', usersController.login)
router.post('/', userLoginValidator, usersController.processlogin)

/*        POST       Logout  */
router.post("/logout", usersController.logout);

/*        GET/POST       contact  */
router.get('/contact', usersController.contact)
router.post('/contact', usersController.comment)

/*        GET       EDITAR PERFIL   */
router.get('/:id/editPerfil', usersController.editPerfil)
router.put('/:id/editPerfil',upload.any(), myAccountValidator, usersController.savePerfil)

module.exports = router; 

