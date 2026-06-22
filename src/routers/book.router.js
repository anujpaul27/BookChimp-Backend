const express = require('express')
const bookRouter = express.Router()
const bookController = require('../controllers/book.controller')

bookRouter.post('/create', bookController.createBook)
bookRouter.get('/all-book', bookController.getTheAllBook)
bookRouter.get('/library-book/:id', bookController.getBookForLibrary)

module.exports = bookRouter