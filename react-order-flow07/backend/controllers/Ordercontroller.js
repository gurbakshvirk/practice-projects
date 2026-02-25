const Order = require('../models/Ordermodal')
const Product = require('../models/Productmodal')
//  ├── userId (optional for now)
//  ├── items [array]
//  │     ├── productId
//  │     ├── name
//  │     ├── priceAtPurchase
//  │     ├── quantity
//  │     └── subtotal
//  ├── totalAmount
//  ├── status
//  ├── paymentStatus
//  ├── createdAt
//  └── updatedAt

exports.createOrder = async (req, res) => {
    try {
        const { items } = req.body;
        if (!items || items.length === 0) {
            return res.status(400).json({ message: "No items provided" });
        }
        let itemsTotal = 0;
        const orderItems = [];



        for (const item of items) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            const priceAtPurchase = product.price;
            const quantity = item.quantity;
            const subtotal = priceAtPurchase * quantity;

            itemsTotal += subtotal;

            orderItems.push({
                productId: product._id,
                name: product.name,
                priceAtPurchase,
                quantity,
                subtotal
            });
        }
        const taxAmount = itemsTotal * 0.05;
        const deliveryFee = 40;
        const discountAmount = 0;

        const totalAmount =
            itemsTotal + taxAmount + deliveryFee - discountAmount;
        const order = await Order.create({
            userId: req.user?._id, // if auth exists
            items: orderItems,
            itemsTotal,
            // taxAmount,
            // deliveryFee,
            // discountAmount,
            totalAmount
        });
        return res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};