var express = require('express');
var router = express.Router();
let productsController= require("../controllers/productsController");

/* GET Products page. */
router.get('/', productsController.products)

router.get('/:id/productDetail', productsController.detail)

router.get('/productCart', productsController.cart)


/* GET Products/acc page. */
router.get('/acc', productsController.accessories)



module.exports = router;