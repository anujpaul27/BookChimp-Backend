const orderModel = require("../models/order.model");

// Create Order
const createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    const order = await orderModel.create({
      userId,
      products: products.map((item) => ({
        productId: item._id,
        title: item.title,
        author: item.author,
        image: item.image,
        price: item.price,
        quantity: item.quantity,
      })),
      totalAmount: Number(totalAmount.toFixed(2)),
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Orders
const getOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get delivered order
const getDeliveredOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({status:'Delivered'});

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await orderModel.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
  getDeliveredOrder
};
