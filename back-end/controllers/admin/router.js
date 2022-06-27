const express = require('express');
const rescue = require('express-rescue');
// const login = require('./login');
const create = require('./create');
const getAll = require('./get');
const getById = require('./getById');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

// router.post('/', rescue(login));
router.post('/', rescue(create));
router.get('/', rescue(getAll));
router.get('/:id', rescue(getById));
router.put('/:id', rescue(update));
router.delete('/:id', rescue(remove));

module.exports = router;