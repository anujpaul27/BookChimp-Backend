const express = require("express");
const orderController = require("../controllers/cart.controller");
const router = express.Router();

router.post("/create", orderController.createCart);
router.get("/all-carts/:id", orderController.getTheCartList);
router.delete(`/delete/:id`, orderController.cartItemDelete);
router.delete(`/all/delete/:id`, orderController.deleteItemAfterOrder);

module.exports = router;
