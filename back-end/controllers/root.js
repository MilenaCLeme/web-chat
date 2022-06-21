const express = require('express');
const login = require('./userLogin/router');
const keyword = require('./keyword/router');

const root = express.Router({ mergeParams: true });

root.use('/userlogin', login);
root.use('/keyword', keyword);

module.exports = root;