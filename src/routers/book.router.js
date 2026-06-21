const express = require('express')
const bookRouter = express.Router()
const bookController = require('../controllers/book.controller')

bookRouter.post('/create', bookController.createBook)


module.exports = bookRouter