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
var upload = multer();
let productsController= require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.products)

/*** CREATE ONE PRODUCT ***/ 
router.get('/createProduct', productsController.create)
router.post('/', upload.any(), productsController.store)

/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail)

/*** EDIT ONE PRODUCT ***/ 
router.get('/editProduct', productsController.edit)

/*** DELETE ONE PRODUCT ***/ 


/*** GET ALL ACCESORIES ***/ 
router.get('/acc', productsController.accessories)

/*** GO TO CART ***/ 
router.get('/productCart', productsController.cart)

module.exports = router;