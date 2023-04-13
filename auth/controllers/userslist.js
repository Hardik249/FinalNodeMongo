const mongoose = require('mongoose'); 
const con = require('../conn.js');
const User = require('../models/users.js');
// module.exports = 
exports.list = async (req, res) => {
    try {
        // const users = await User.find({}).lean();
        const users = await User.find({});
        res.status(200).json({
            'status': 'success',
            'message': 'users found',
			data: users
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