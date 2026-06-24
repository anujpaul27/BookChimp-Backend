const express = require('express')
const { createCart } = require('../controllers/order.controller')
const router = express.Router()

router.post('/create', createCart)


module.exports = router