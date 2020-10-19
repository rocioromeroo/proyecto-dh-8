var express = require('express');
var router = express.Router();
let productsController= require("../controllers/productsController");

/* GET Products page. */
router.get('/:id?', productsController.products)


module.exports = router;