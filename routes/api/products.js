var express = require('express');
var router = express.Router();

const apiProductsController = require('../../controllers/api/productsController')

router.get('/products', apiProductsController.list)

router.get('/products/:id', apiProductsController.detail)


module.exports = router; 