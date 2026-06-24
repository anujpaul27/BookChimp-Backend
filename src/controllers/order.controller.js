const cartModel = require("../models/cart.model");


async function createCart() {
  try {
    const { userId, title, author, price, image } = req.body;
    const newCart =new cartModel(userId, title, author, price, image)
    newCart.quantity = 1;
    const saveCart = await newCart.save()
    res.status(201).json({
        message: true,
        data: saveCart 
    })
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}

module.exports = {createCart}