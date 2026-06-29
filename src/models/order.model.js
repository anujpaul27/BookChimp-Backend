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
        type: mongoose.Schema.Types.ObjectId,
        ref: "carts",
        required: true,
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