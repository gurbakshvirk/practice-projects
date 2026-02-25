    const mongoose = require('mongoose');
    const orderSchema = new mongoose.Schema({
        //     Order
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
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false // for now
        },
        items: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                priceAtPurchase: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                subtotal: {
                    type: Number,
                    required: true
                }
            }
        ],
        totalAmount: {
            type: Number,
            // required: true,
        },
        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "preparing",
                "delivered",
                "cancelled",
            ],
            default: 'pending'
        },
        paymentStatus: {
            type: String,
            enum: [
                "unpaid",
                "paid",
                "failed",
            ],
            default: "unpaid",
        },
    }, { timestamps: true });
    module.exports = mongoose.model("Order", orderSchema);