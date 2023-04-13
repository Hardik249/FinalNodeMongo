const express = require('express');
const route = express();
const bodyParser = require('body-parser');
const api = require('./modules/routes.js');
// parse requests of content-type - application/json
route.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
route.use(express.urlencoded({ extended: true }));

route.use('/api', api);

module.exports = route;