require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Ticket = require("./model/Ticket");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(function () {
    console.log("MongoDb connected successfully");
  })
  .catch(function () {
    console.log("MongoDB connection failed");
  });

app.post("/tickets", async function (req, res) {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json({
      message: "Ticket created successfully",
      ticket: ticket,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(3000, function () {
  console.log("Server is running on port number 3000");
});
