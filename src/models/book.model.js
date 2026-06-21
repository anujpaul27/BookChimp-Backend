const mongoose =  require('mongoose')


const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: true,
        trim: true
    },
    author: {
        type: String,
        require: true,
        trim : true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require : true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'approved']
    },
})

const bookModel = mongoose.model('books', bookSchema)
module.exports = bookModel