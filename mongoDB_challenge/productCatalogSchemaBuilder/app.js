require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/Product");
const app=express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log("MongoDB connected successfully");
  })
  .catch(function () {
    console.log("MongoDB connection failed");
  });

app.post("/products", async function (req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({
      message: "Product added successfully",
      product: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


app.listen(3000,function(){
    console.log("Server is running on 3000")
})