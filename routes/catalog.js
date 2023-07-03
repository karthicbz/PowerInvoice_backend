const router = require('express').Router();
const CustomerController = require('../controllers/customerController');

router.get('/customers', CustomerController.all_customers_get);

router.post('/customers', CustomerController.customer_detail_post);

router.get('/customers/:id/delete', CustomerController.delete_customer_get);

module.exports = router;