require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");
const app = express();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log("MongoDB connected successfully");
  })
  .catch(function () {
    console.log("MongoDB connection failed");
  });

app.post("/register", async function (req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
