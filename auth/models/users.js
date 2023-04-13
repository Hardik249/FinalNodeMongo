const mongoose = require('mongoose'); 
const con = require('../conn.js');
const usersschema = require('../schema/usersschema.js');

// module.exports = mongoose.Model('users', User);
User = mongoose.model('users', usersschema);
// exports.mongoose.model('users', User);

module.exports = User;