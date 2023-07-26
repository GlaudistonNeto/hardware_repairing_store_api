const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');

// Orders routes
router.post('/', ordersController.createOrder);
router.put('/:id', ordersController.updateOrder);
router.delete('/:id', ordersController.deleteOrder);
router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);

module.exports = router;
