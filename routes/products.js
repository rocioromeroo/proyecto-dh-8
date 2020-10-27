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

/* GET Products page. */
router.get('/', productsController.products)

router.get('/productCart', productsController.cart)

router.get('/createProduct', productsController.create)
router.post('/', upload.any(), productsController.store)


/* GET Products/acc page. */
router.get('/acc', productsController.accessories)

router.get('/:id/productDetail', productsController.detail)



module.exports = router;