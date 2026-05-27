require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

let result = "Database connection pending";

mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log("MongoDB connected successfully");
    result = "Database connected successfully";
  })
  .catch(function () {
    console.log("MongoDB connection failed");
    result = "Database not connected";
  });

app.get("/db-status", function (req, res) {
  res.json({ status: result });
});

app.listen(3000, function () {
  console.log("Server is running on Port 3000");
});