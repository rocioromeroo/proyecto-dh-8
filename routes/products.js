var express = require('express');
var router = express.Router();
var path = require('path');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage });

let productsController= require("../controllers/productsController");
const productValidator = require('../middleware/productValidator');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.products)
router.get('/category/:category', productsController.category)

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create)
router.post('/', upload.any(), productValidator, productsController.store)

/*** GO TO CART ***/ 
router.get('/cart', productsController.cart)
router.post('/cart', productsController.add)

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.detail)

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit)
router.put('/:id', upload.any(), productsController.update)

/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.destroy)

module.exports = router;