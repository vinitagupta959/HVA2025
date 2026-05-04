const express = require("express");
const router = express.Router();
const users  = require("../../data/memory");

router.post("/", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Name and email are required",
    });
  }

  let id= users.length + 1
  const newUser = {
    id:id,
    name: name,
    email: email,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
    message: "User created (v1)",
  });
});

router.get("/", function (req, res) {
  const result = users.map(function (user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  });
  res.status(200).json({
    success: true,
    data: result,
    message: "All users (v1)",
  });
});

module.exports = router;