const mongoose = require('mongoose'); 
const con = require('../conn.js');
const User = require('../models/users.js');
// var mongoose_delete = require('mongoose-delete');
// let soft_delete = require('mongoose-softdelete');

exports.delete = async (req, res) => {
    try {
        // const users = await User.find({}).lean();
        // const user = await User.findOne({_id: req.params.slug}).exec();
        let user = null;
        if (typeof(req.params.slug) == Object) {
            user = await User.findOne({_id: req.params.slug}).exec();
        }
        user = await User.findOne({username: req.params.slug}).exec();
        // const user = await User.findOneAndDelete({_id: req.params.slug}).exec();
        // user.softdelete(function (err, newTest) {
        //     if (err) {
        //       callback(err);
        //     }
        //     callback(null, newTest);
        // });
        
        // user.save(function () {
        //     // mongodb: { deleted: false, name: 'Fluffy' }
        
        //     // note: you should invoke exactly delete() method instead of standard fluffy.remove()
        //     user.delete(function () {
        //         // mongodb: { deleted: true, name: 'Fluffy' }
        //     })
        // })        
        
        // note: you should invoke exactly delete() method instead of standard fluffy.remove()
        // user.delete(function (error, result) {
        //     if (error) throw error;
        //     console.log(result);
        //     // mongodb: { deleted: true, name: 'Fluffy' }
        // })

        user.delete();
        console.log('t', typeof(user.deleted));
        // if (user.deletedAt != null) {
        //     res.status(200).json({
        //         'status': 'success',
        //         'message': 'users found',
        //         data: user
        //     })
        // }
        console.log('user.deleted', user.deleted);
        console.log('user.deletedAt', user.deletedAt);
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