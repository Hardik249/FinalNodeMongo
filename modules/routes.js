const express = require('express');
const routes = express();
const usersroutes = require('./users/usersroutes.js');

routes.use('/users', usersroutes);

module.exports = routes;