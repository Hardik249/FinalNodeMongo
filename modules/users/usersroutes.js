const express = require('express');
const usersroutes = express();

const userslist = require('../../auth/controllers/userslist.js');
const usersadd = require('../../auth/controllers/usersadd.js');
const edituser = require('../../auth/controllers/edituser.js');
const updateuser = require('../../auth/controllers/updateuser.js');
const deleteuser = require('../../auth/controllers/deleteuser.js');

usersroutes.get('/list', userslist.list);
usersroutes.post('/add', usersadd.add);
usersroutes.get('/edit/:slug', edituser.edit);
usersroutes.put('/update/:slug', updateuser.update);
usersroutes.patch('/update/:slug', updateuser.update);
usersroutes.delete('/delete/:slug', deleteuser.delete);


module.exports = usersroutes;