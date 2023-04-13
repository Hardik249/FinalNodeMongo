const mongoose = require('mongoose'); 
const con = require('../conn.js');
const User = require('../models/users.js');

exports.edit = async (req, res) => {
    try {
        // console.log(User);
        console.log(typeof(req.params.slug));
        if (typeof(req.params.slug) == Object) {
            const user = await User.findOne({_id: req.params.slug}).exec();
        }
        const user = await User.findOne({username: req.params.slug}).exec();
        res.status(200).json({
            'status': 'success',
            'message': 'users found',
			data: user
        })
    } catch (error) {
        console.error('error', error);
        console.error(error);
        res.status(404).json({
            'status': 'fail',
            'message': error
        })
    }
}