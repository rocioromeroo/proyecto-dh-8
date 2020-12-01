var express = require('express');
const path = require('path');
var router = express.Router();
const usersController = require('../controllers/usersController')
const userValidator = require("../middleware/userValidator")
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users')
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

/*        GET/POST       Register   */
router.get('/register', usersController.register)
router.post('/register', userValidator, upload.any(), usersController.userStore)

/*        GET/POST       Login  */
router.get('/login', usersController.login)


router.get('/contact', usersController.contact)
router.post('/contact', usersController.comment)

router.get('/myAccount', usersController.myAccount)


module.exports = router; 

