const express = require("express");
const { createOrder, getOrders, updateOrderStatus, getDeliveredOrder } = require("../controllers/order.controller");
const orderRouter = express.Router();

orderRouter.post('/create', createOrder)
orderRouter.get('/all-orders', getOrders)
orderRouter.get('/delivered-order', getDeliveredOrder)
orderRouter.patch('/:id/status', updateOrderStatus)

module.exports = orderRouter;
