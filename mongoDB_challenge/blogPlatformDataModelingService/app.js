require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");
const Post = require("./model/Post");

const app = express();
app.use(express.json());

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

app.post("/posts", async function (req, res) {
  try {
    const post = new Post(req.body);

    await post.save();

    res.status(201).json({
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


app.listen(3000,function(){
    console.log("Server is running on the port number 3000")
})