const express = require('express');
const rescue = require('express-rescue');
const keyword = require('./keyword');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(keyword));

module.exports = router;