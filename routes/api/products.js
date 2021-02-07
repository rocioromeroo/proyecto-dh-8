var express = require('express');
var router = express.Router();

const apiProductsController = require('../../controllers/api/productsController')

<<<<<<< HEAD
router.get('/products', apiProductsController.list)
=======
router.get('/products/:id', apiProductsController.detail)
>>>>>>> 2f50cdb7e03eaa15512a70c36d9fb893cae131ce

module.exports = router; 