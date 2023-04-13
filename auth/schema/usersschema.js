const mongoose = require('mongoose'); 
const con = require('../conn.js');
const { Schema } = mongoose;
// let soft_delete = require('mongoose-softdelete');
var mongoose_delete = require('mongoose-delete');


// const usersschema = new Schema({
const usersschema = mongoose.Schema({
    // username: String, // String is shorthand for {type: String}
    username: {
        type: String,
        required: true
    }, // String is shorthand for {type: String}
    email:  {
        type: String,
        required: true
    },
    password: String,
    contact:  {
        type: Number,
        required: true
    },
    createdBy: String,
    updatedBy: String,
    createdAt: Date,
    updatedAt: Date
});

// usersschema.plugin(soft_delete);
// usersschema.plugin(mongoose_delete);
usersschema.plugin(mongoose_delete, { deletedAt : true });


module.exports = usersschema;