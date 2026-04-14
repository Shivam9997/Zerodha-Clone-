const express = require('express');
const router = express.Router();
const { getUserOrders, createOrder } = require('../Controllers/OrdersController');

router.get('/', getUserOrders);
router.post('/', createOrder);

module.exports = router;

