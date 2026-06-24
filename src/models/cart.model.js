const mongoose = require ('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {type:String, required: true},
    title: {type:String, required: true},
    author: {type:String},
    price: {type:Number, required: true},
    image: {type:String, required: true},
    quantity: {type:Number, default: 1}
})

const cartModel = mongoose.model('carts', cartSchema)
module.exports = cartModel