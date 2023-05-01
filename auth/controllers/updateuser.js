const mongoose = require('mongoose'); 
const con = require('../conn.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

exports.update = async (req, res) => {
    try {
        // console.log(User);
        const password = req.body.password;
		const saltRounds = 10;
        const hashPass = await bcrypt.hash(password, saltRounds);
        // const user = await User.findByIdAndUpdate({_id: req.params.slug}).exec();
        const user = await User.findOneAndUpdate(
            {_id: req.params.slug},
            {
                username: req.body.username,
                email: req.body.email,
                password: hashPass,
                contact: req.body.contact,
                // createdAt: new Date(),
                // createdAt: Date.now(),
                updatedAt: Date.now(),
                deletedAt: null,
                deleted: false,
            }
        ).exec();
        let users = await User.findOne({_id: req.params.slug}).exec();
        // const users = new User({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: hashPass,
        //     contact: req.body.contact,
        //     // createdAt: new Date(),
        //     // createdAt: Date.now(),
        //     updatedAt: Date.now(),
        // });
		const save = await user.save();
        return res.status(200).json({
            'status': 'success',
            'message': 'users found',
			data: users, password
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