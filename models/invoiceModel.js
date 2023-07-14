const mangoose = require('mongoose');
const Schema = mangoose.Schema;

const invoice = new Schema({
    invoiceNumber:{type:Number, required:true},
    date:{type:Date, required:true},
    customer: {type:Schema.Types.ObjectId, ref:"Customers", required:true},
    purchasedItems: {type:Array, required:true},
    tota1:{type:String, required:true},
});

module.exports = mangoose.model("Invoice", invoice);
