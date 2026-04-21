const express = require("express");
const app = express();
const middleware = require("./middleware/validate");
let users = [];
let nextId = 1;
app.use(express.json());
app.use(function (req, res, next) {
  req.users = users;
  next();
});

app.get("/api/v1/users", function (req, res) {
  res.status(200).json({
    success: true,
    data: users,
    message: "Users fetched",
  });
});

app.post("/api/v1/users", middleware.validateUserInput, function (req, res) {
  let { name, email } = req.body;
  let newUser = {
    id: nextId++,
    name: name,
    email: email,
  };
  req.users.push(newUser);
  return res.status(201).json({
    success: true,
    data: newUser,
    message: "User created",
  });
  // }
});

app.get(
  "/api/v1/users/:id",
  middleware.validateId,
  middleware.findUser,
  function (req, res) {
    let user = req.user;

    return res.status(200).json({
      success: true,
      data: user,
      message: "User found",
    });
  },
);

app.put(
  "/api/v1/users/:id",
  middleware.validateId,
  middleware.findUser,
  middleware.validateUserInput,
  function (req, res) {
    let { name, email } = req.body;
    let user = req.user;
    user.name = name;
    user.email = email;
    return res.status(200).json({
      success: true,
      data: user,
      message: "User updated",
    });
  },
  // }
);

app.delete("/api/v1/users/:id", middleware.validateId, function (req, res) {
  let id = Number(req.params.id);
  let index = users.findIndex(function (user) {
    return user.id === id;
  });
  if (index === -1) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  } else {
    req.users.splice(index, 1);
    return res.status(200).json({
      success: true,
      data: null,
      message: "User deleted",
    });
  }
});

app.listen(3000, function () {
  console.log("Server is running on the Port number 3000");
});
