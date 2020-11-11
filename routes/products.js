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

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.products)
router.get('/category/:category', productsController.category)


/*** CREATE ONE PRODUCT ***/ 
router.get('/createProduct', productsController.create)
router.post('/', upload.any(), productsController.store)


/*** GET ALL ACCESORIES ***/ 


/*** GO TO CART ***/ 
router.get('/productCart', productsController.cart)

/*** GET ONE PRODUCT ***/ 
router.get('/:id', productsController.detail)

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/editProduct', productsController.edit)
router.put('/:id', productsController.update)

/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.destroy)

module.exports = router;