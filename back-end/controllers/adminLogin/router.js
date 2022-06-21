const express = require('express');
const rescue = require('express-rescue');
const login = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(login));

module.exports = router;