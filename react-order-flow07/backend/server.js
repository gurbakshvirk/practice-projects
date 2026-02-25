const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRoutes = require("./routes/OrderRoutes");

require("dotenv").config();

const app = express();
const productRoutes = require('./routes/productRoutes');
// middlewares
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Test app API Running... for product ");
});

app.use("/api/orders", orderRoutes);

app.use("/api/products", productRoutes);
// connect DB + start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.log(err));