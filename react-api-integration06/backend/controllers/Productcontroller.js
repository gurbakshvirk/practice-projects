// const mongoose = require('mongoose')
const Product = require('../models/Productmodal')
// name: "",
// price: "",
// category: "",
// image: "",
// isPopular: "",
// isAvailable: ""
// Create the productt
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, image, isPopular, isAvailable } = req.body;
        const product = new Product({
            name,
            price,
            category,
            image,
            isPopular,
            isAvailable
        });
        await product.save();
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get products 
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// update product 
exports.updateProduct = async (req, res) => {
    try {
        const { name, price, category, image, isPopular, isAvailable } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            {
                name,
                price,
                category,
                image,
                isPopular,
                isAvailable
            },
            { new: true }
        )
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// show single product 
exports.getSingleProduct = async (req, res) => {
    try {
        const product = await Product.findById(
            req.params.id,
        )
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete product 
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(
            req.params.id,
        )
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
