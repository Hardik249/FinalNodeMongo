console.log('connection')

const mongoose = require('mongoose');

const conn = mongoose.connect('mongodb://localhost:27017/demo', {                
  useNewUrlParser: true, 
  useUnifiedTopology: true })
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));;

module.exports = conn;
