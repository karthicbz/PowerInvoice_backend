const router = require('express').Router();
const CustomerController = require('../controllers/customerController');
const InvoiceController = require('../controllers/invoiceController');

router.get('/customers', CustomerController.all_customers_get);

router.post('/customers', CustomerController.customer_detail_post);

router.get('/customers/:id/delete', CustomerController.delete_customer_get);

router.post('/customers/:id/update', CustomerController.update_customer_post);

router.get('/customers/search', CustomerController.search_customers_get);

router.post('/invoices', InvoiceController.invoice_post);

module.exports = router;