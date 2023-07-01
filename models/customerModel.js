const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customers = new Schema({
    name:{type:String, minLength:3, maxLength:100, required:true},
    email:{type:String, maxLength:100, required:false},
    phNumber:{type:String, minLength:10, maxLength:10, required:true},
    gstNumber:{type:String, minLength:15, maxLength:15, required:false},
    address:{type:String, maxLength:1000, required:true},
});

module.exports = mongoose.model('Customers', customers);