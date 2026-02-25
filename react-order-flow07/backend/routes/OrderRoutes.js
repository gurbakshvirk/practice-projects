const express = require("express");
const router = express.Router();

const { createOrder, getAllOrders } = require("../controllers/Ordercontroller");

// POST → Create new order
router.post("/", createOrder);
// get all orders 
router.get("/", getAllOrders);

module.exports = router;