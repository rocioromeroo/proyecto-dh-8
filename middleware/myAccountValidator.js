const { body, check } = require("express-validator");
let modelsUsers = require("../models/user");
const db = require('../database/models');
const { Op } = require('sequelize')

module.exports = [
    check('first_name')
    .notEmpty()
    .withMessage("Campo obligatorio"),
    check('last_name')
    .notEmpty()
    .withMessage("Campo obligatorio")
    
]