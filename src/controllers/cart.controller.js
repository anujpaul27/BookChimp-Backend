const cartModel = require("../models/cart.model");
const orderModel = require("../models/order.model");

/** CART PRODUCT FUNCTIONALITY */
async function createCart(req,res) {
  try {
    const { userId, title, author, price, image } = req.body;
    const saveCart = await cartModel.create({userId, title, author, price, image})
    // const newCart = new cartModel(userId, title, author, price, image)
    // newCart.quantity = 1;
    // const saveCart = await newCart.save()

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

async function getTheCartList (req,res)
{
  try 
  {
    const id = req.params.id;
    const carts = await cartModel.find({userId: id})

    res.status(200).json({
      message: 'get all carts successful',
      data: carts
    })
  }
  catch (err)
  {
    res.status(400).json({
      message: err.message
    })
  }
}

async function cartItemDelete (req,res)
{
  try
  {
    const id = req.params.id;
    const response = await cartModel.findByIdAndDelete(id)

    res.status(200).json({
      message: 'Delete Successful'
    })
  }
  catch (err)
  {
    res.status(400).json({
      message: err.message
    })
  }
}

async function deleteItemAfterOrder (req,res)
{
  try 
  {
    const id = req.params.id;
    const response = await cartModel.deleteMany({userId:id})
    res.status(200).json({
      message: 'Delete Successful '
    })
  }
  catch (err)
  {
    res.status(500).json({
      message: err.message
    })
  }
}


module.exports = {
  createCart,
  getTheCartList,
  cartItemDelete,
  deleteItemAfterOrder,
}