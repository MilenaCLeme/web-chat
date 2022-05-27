const express = require('express');
const login = require('./login/router');
const keyword = require('./keyword/router');

const root = express.Router({ mergeParams: true });

root.use('/login', login);
root.use('/keyword', keyword);

module.exports = root;