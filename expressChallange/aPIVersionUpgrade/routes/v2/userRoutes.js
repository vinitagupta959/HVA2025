const express = require("express");
const router = express.Router();
const  users  = require("../../data/memory");
const {validateUserFields, validateEmail,} = require("../../middleware/reqValidater");

router.post("/", validateUserFields,validateEmail, function (req, res) {
  const {name,email,role} = req.body;
  let id=users.length + 1
  const newUser = {
    id:id,
    name: name,
    email: email,
    role: role,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
    message: "User created (v2)",
  });
});

router.get("/", function (req, res) {
  const result = users.map(function (user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      displayName: user.name + " <" + user.email + ">",
    };
  });

  res.status(200).json({
    success: true,
    data: result,
    message: "All users (v2)",
  });
});

module.exports = router;
