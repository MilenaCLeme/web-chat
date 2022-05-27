const express = require('express');
const login = require('./login/router');

const root = express.Router({ mergeParams: true });

root.use('/login', login);

module.exports = root;