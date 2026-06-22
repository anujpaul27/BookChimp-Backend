const express = require('express')
const bookRouter = express.Router()
const bookController = require('../controllers/book.controller')

bookRouter.post('/create', bookController.createBook)
bookRouter.get('/all-book', bookController.getTheAllBook)
bookRouter.get('/library-book/:id', bookController.getBookForLibrary)
bookRouter.delete('/book-delete/:id', bookController.deleteBookById)
bookRouter.get('/get-book/:id', bookController.getTheBookById)
bookRouter.patch('/update-book/:id', bookController.updatePendingStatus)
bookRouter.get('/get-pending-book', bookController.getThePendingBookForPermission)
bookRouter.get('/get-pending-book/:id', bookController.getThePendingBookSpecificLib)

module.exports = bookRouter