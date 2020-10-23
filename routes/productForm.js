var express = require('express');
var router = express.Router();
let productFormController= require("../controllers/productFormController");

/* GET home page. */
router.get('/', productFormController.productForm)

module.exports = router;