const express = require('express');
const rescue = require('express-rescue');
const getKeyWord = require('./get');
const createKeyWord = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(getKeyWord));
router.post('/new', rescue(createKeyWord));

module.exports = router;