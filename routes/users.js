var express = require('express');
const path = require('path');
var router = express.Router();
const usersController = require('../controllers/usersController')
const userValidator = require("../middleware/userValidator")


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*        GET/POST       Register   */
router.get('/register', usersController.register)
router.post('/register', userValidator, usersController.userStore)

/*        GET/POST       Login  */
router.get('/login', usersController.login)


router.get('/contact', usersController.contact)
router.post('/contact', usersController.comment)


module.exports = router; 
