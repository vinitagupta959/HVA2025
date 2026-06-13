require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log("MongoDb connected successfully");
  })
  .catch(function (err) {
    console.log(err);
  });


app.listen(3000,function(req,res){
    console.log("Server is running on port 3000")
})