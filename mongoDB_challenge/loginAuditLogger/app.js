require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const LoginLog = require("./model/LoginLog");
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log("MongoDb connected successfully");
  })
  .catch(function () {
    console.log("MongoDb connection failed");
  });

app.post("/login", async function (req, res) {
  try {
    const login = new LoginLog(req.body);
    await login.save();
    res.status(201).json({
      message: "Login attempt logged",
      log: login,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


app.listen(3000,function(){
    console.log("Server running on port 3000");
})