const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        author: {
          type: String,
        },
        image: {
          type: String,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Dispatched", "Delivered"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);


const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel