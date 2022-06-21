const express = require('express');
const login = require('./userLogin/router');
const keyword = require('./keyword/router');
const admin = require('./admin/router');
const adminlogin = require('./adminLogin/router')

const root = express.Router({ mergeParams: true });

root.use('/userlogin', login);
root.use('/keyword', keyword);
root.use('/admin', admin);
root.use('/adminlogin', adminlogin);

module.exports = root;