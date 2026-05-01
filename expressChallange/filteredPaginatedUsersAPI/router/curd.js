const express = require("express");
const router = express.Router();
const {
  validateUserQuery,
  validateId,
  validateReqBody,
} = require("../middleware/validate");
let users = [];

router.get("/", validateUserQuery, function (req, res) {
  let result = [...users];
  let { search, page, limit, sort, order } = req.queryOptions;
  if (search) {
    let s = search.toLowerCase();
    result = result.filter(function (user) {
      return (
        user.name.toLowerCase().includes(s) ||
        user.email.toLowerCase().includes(s)
      );
    });
  }
  result.sort(function (a, b) {
    if (a[sort] < b[sort]) {
      if (order === "asc") {
        return -1;
      } else {
        return 1;
      }
    } else if (a[sort] > b[sort]) {
      if (order === "asc") {
        return 1;
      } else {
        return -1;
      }
    } else {
      return 0;
    }
  });
  let start = (page - 1) * limit;
  result = result.slice(start, start + limit);
  res.json({
    success: true,
    data: result,
    message: "All users fetched",
  });
});

router.post("/", validateReqBody, function (req, res) {
  let { name, email } = req.body;
  let id = users.length + 1;
  let newUser = {
    id: id,
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json({
    success: true,
    data: newUser,
    message: "New user created",
  });
});

router.get("/:id", validateId, function (req, res) {
  let id = req.params.id * 1;
  let user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }
  res.status(200).json({
    success: true,
    data: user,
    message: "User fetched",
  });
});

router.put("/:id", validateId, validateReqBody, function (req, res) {
  let id = req.params.id * 1;
  let user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }
  user.name = req.body.name;
  user.email = req.body.email;
  res.status(200).json({
    success: true,
    data: user,
    message: "Update user",
  });
});

router.delete("/:id", validateId, function (req, res) {
  let id = req.params.id * 1;
  let index = users.findIndex(function (user) {
    return user.id === id;
  });

  if (index === -1) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }

  users.splice(index, 1);
  res.status(200).json({
    success: true,
    data: null,
    message: "User deleted",
  });
});

module.exports = router;
