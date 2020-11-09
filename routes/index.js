var express = require('express');
var router = express.Router();
let indexController= require("../controllers/indexController");

/* GET home page. */
router.get('/', indexController.index)

/* GET home page. */
router.get('/search', indexController.search)

/* GET My Account page. */
router.get('/myAccount', indexController.myAccount)

module.exports = router;
