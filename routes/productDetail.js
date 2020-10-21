const express = require('express');
const router = express.Router();

const productDetailController= require("../controllers/productDetailController");

/* GET Products page. */
router.get('/', productDetailController.show)



module.exports = router;