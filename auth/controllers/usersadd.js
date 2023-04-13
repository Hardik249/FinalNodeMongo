const mongoose = require('mongoose'); 
const con = require('../conn.js');
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

exports.add = async (req, res) => {
    try {
        const password = req.body.password;
		const saltRounds = 10;
        console.log(password);
        console.log(req.body);
        // if (password == null) {
        //     return res.status(200).json({
        //         'status': 'success',
        //         'message':'enter password'
        //     });
        // }

        // if (req.body == null) {
        //     return res.status(200).json({
        //         'status': 'success',
        //         'message':'enter all the required fields',
        //         'fields':[
        //             'username',
        //             'email',
        //             'contact'
        //         ]
        //     });
        // }
		const hashPass = await bcrypt.hash(password, saltRounds);
        const users = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass,
            contact: req.body.contact,
            // createdAt: new Date(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        });
        console.log('bfor sv');
		const save = await users.save();
        console.log('after sv');
        return res.status(200).json({
            status: 'success',
            message: 'users added',
            data:password
        })
    } catch (error) {
        console.log('error');
        console.log(req.body);
        // console.error(error);
        // console.error(error._message);
        // console.error(error.Error);
        // console.error(error.kind);
        console.error(error.errors);
        console.error(error.message);
        return res.status(200).json({
            'status': 'fail',
            'message': error.message
        })
        // if (error.kind == 'required') {
        //     // return res.stutus(400).json({
        //     //     'status': 'fail',
        //     //     'message': error
        //     // })
        //     return res.send(error);
        // }
    }
}