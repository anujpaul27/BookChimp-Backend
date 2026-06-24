const express = require('express')
const orderController = require('../controllers/order.controller')
const router = express.Router()

router.post('/create', orderController.createCart)
router.get('/all-carts/:id', orderController.getTheCartList)


module.exports = router