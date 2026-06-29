const orderModel = require("../models/order.model");

const createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

     const order = await orderModel.create({
      userId,
      products: products.map((item) => item._id),
      totalAmount,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createOrder };