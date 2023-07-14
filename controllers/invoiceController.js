const asynchandler = require('express-async-handler');
const Invoices = require('../models/invoiceModel');
const {body, validationResult} = require('express-validator');
const message = require('../scripts/message');

exports.all_invoices_get = asynchandler(async(req, res)=>{

});

exports.invoice_post = asynchandler(async(req, res)=>{
    res.json(req.body);
})