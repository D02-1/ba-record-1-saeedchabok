const login = require('../controller/users/login');
const express = require('express');
const validator = require('express-validator');

const router = express.Router();

router.route('/')
    .post(  validator.body('firstName').isEmail().trim().withMessage('firstName muss eine email adresse sein!'), login);

module.exports = router;
