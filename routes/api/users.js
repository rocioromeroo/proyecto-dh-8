var express = require('express');
var router = express.Router();

const apiUsersController = require('../../controllers/api/usersController')

router.get('/users', apiUsersController.list)
router.get('/users/:id', apiUsersController.detail)


module.exports = router; 