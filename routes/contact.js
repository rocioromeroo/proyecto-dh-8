var express = require('express');
var router = express.Router();
let contactController= require("../controllers/contactController");

/* GET home page. */
router.get('/', contactController.contact)

module.exports = router;