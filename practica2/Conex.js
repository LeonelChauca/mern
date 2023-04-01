const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudDb');
const obDb=mongoose.connection;
obDb.on("connected",()=>{console.log("conexion a db")});
obDb.on("error",()=>{console.log("error  a db")});
module.exports=mongoose;