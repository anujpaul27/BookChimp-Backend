const mongoose = require ('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {type:String, require: true},
    title: {type:String, require: true},
    author: {type:String},
    price: {type:Number, require: true},
    image: {type:String, require: true},
    quantity: {type:Number, default: 1}
})

const cartModel = mongoose.model('carts', cartSchema)
module.exports = cartModel