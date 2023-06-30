const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customers = new Schema({
    name:{type:String, min:3, max:100, required:true},
    email:{type:String, min:5, max:100, required:false},
    phNumber:{type:BigInt, min:10, required:true},
    gstNumber:{type:String, min:15, required:false},
    address:{type:String, min:3, max:1000, required:true},
});

module.exports = mongoose.model('Customers', customers);