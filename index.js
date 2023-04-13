const express = require('express');
const app = express();
const route = require('./route.js');
const PORT = process.env.PORT || 3003;
route.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
});