var express = require('express');
var router = express.Router();

const apiUsersController = require('../../controllers/api/usersController')

router.get('/users', apiUsersController.list)

module.exports = router; 