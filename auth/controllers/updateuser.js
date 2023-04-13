const mongoose = require('mongoose'); 
const con = require('../conn.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

exports.update = async (req, res) => {
    try {
        // console.log(User);
        const password = req.body.password;
		const saltRounds = 10;
        const user = await User.findByIdAndUpdate({_id: req.params.slug}).exec();
        const hashPass = await bcrypt.hash(password, saltRounds);
        const users = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
            contact: req.body.contact,
            // createdAt: new Date(),
            // createdAt: Date.now(),
            updatedAt: Date.now(),
        });
		const save = await users.save();
        return res.status(200).json({
            'status': 'success',
            'message': 'users found',
			data: user, users, password
        })
    } catch (error) {
        console.error('error', error.message);
        // console.error(error);
        return res.status(404).json({
            'status': 'fail',
            'message': error.message
        })
    }
}