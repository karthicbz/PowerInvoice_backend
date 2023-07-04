const asynchandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const Customers = require('../models/customerModel');
const message = require('../scripts/message');

exports.all_customers_get = asynchandler(async(req, res)=>{
    const allCustomers = await Customers.find().exec();
    res.json(allCustomers);
});

exports.customer_detail_post = [
    body('companyname', 'Company name must be atleast 3 characters length')
    .trim()
    .isLength({min:3})
    .escape(),
    body('companyemail', 'must be a valid email')
    .trim()
    .isLength({min:5})
    .isEmail(),
    body('companyphone', 'must be a valid phone number')
    .trim()
    .isLength({min:10, max:10})
    .escape(),
    body('companygst', 'Must be a valid GST number')
    .trim()
    .isLength({min:15, max:15})
    .escape(),
    body('companyaddress', 'Must be a valid address')
    .trim()
    .isLength({min:10})
    .escape(),
    asynchandler(async(req, res)=>{
        const errors = validationResult(req);
        const detail = new Customers({
            name: req.body.companyname,
            email: req.body.companyemail,
            phNumber: req.body.companyphone,
            gstNumber: req.body.companygst,
            address: req.body.companyaddress,
        });

        if(!errors.isEmpty){
            res.json(message(errors, 1)) ;
        }else{
            try{
                await detail.save();
                res.json(message('Customer detail saved', 0));
            }catch(err){
                res.json(message(err, 1));
            }
        }
    }),
];

exports.delete_customer_get = asynchandler(async(req, res)=>{
    const isCustomerFound = await Customers.findById(req.params.id).exec();
    if(isCustomerFound){
        await Customers.findByIdAndRemove(req.params.id).exec();
        res.json(message('Customer details was deleted', 0));
    }else{
        res.json(message('Customer details not found', 1));
    }
});

exports.update_customer_post = [
    body('companyname', 'Company name must be atleast 3 characters length')
    .trim()
    .isLength({min:3})
    .escape(),
    body('companyemail', 'must be a valid email')
    .trim()
    .isLength({min:5})
    .isEmail(),
    body('companyphone', 'must be a valid phone number')
    .trim()
    .isLength({min:10, max:10})
    .escape(),
    body('companygst', 'Must be a valid GST number')
    .trim()
    .isLength({min:15, max:15})
    .escape(),
    body('companyaddress', 'Must be a valid address')
    .trim()
    .isLength({min:10})
    .escape(),

    asynchandler(async(req, res)=>{
        console.log(req.body);
        const errors = validationResult(req);
        const updateCustomer = new Customers({
            name:req.body.companyname,
            email: req.body.companyemail,
            phNumber: req.body.companyphone,
            gstNumber: req.body.companygst,
            address: req.body.companyaddress,
            _id: req.params.id,
        });
        if(!errors.isEmpty){
            res.json(message(errors, 1));
        }else{
            const isCustomerFound = await Customers.findById(req.params.id).exec();
            if(isCustomerFound){
                await Customers.findByIdAndUpdate(req.params.id, updateCustomer).exec();
                res.json(message('Customer details was updated', 0));
            }else{
                res.json(message('Customer not found', 1));
            }
        }
    }),
]

