var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*        GET/POST       Register   */
router.get('/register', usersController.register)
router.post('/register', usersController.userStore)



router.get('/login', usersController.login)


router.get('/contact', usersController.contact)
router.post('/contact', usersController.comment)


module.exports = router; 
