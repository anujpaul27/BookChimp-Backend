const express = require("express");
const { createOrder, getOrders, updateOrderStatus } = require("../controllers/order.controller");
const orderRouter = express.Router();

orderRouter.post('/create', createOrder)
orderRouter.get('/all-orders', getOrders)
orderRouter.patch('/:id/status', updateOrderStatus)

module.exports = orderRouter;
