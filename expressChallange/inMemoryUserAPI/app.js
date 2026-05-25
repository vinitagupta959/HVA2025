const express = require("express");
const app = express();
const data = require("./data/user");
const {
  checkJson,
  checkClient,
  checkAdmin,
  validateCreateUser,
  validateUpdateUser,
  findUser,
} = require("./middleware/userMiddleware");

app.use(express.json());
app.post("/users", checkJson, validateCreateUser, function (req, res) {
  let { name, email, age } = req.body;

  let user = {
    id: data.nextId++,
    name,
    email,
    age,
  };

  data.users.push(user);

  return res.status(201).json({
    ok: true,
    created: user,
  });
});
app.get("/users", function (req, res) {
  let minAge = Number(req.query.minAge);
  let filteredUsers = data.users;
  if (!isNaN(minAge) && req.query.minAge !== undefined) {
    filteredUsers = data.users.filter(function (user) {
      return user.age >= minAge;
    });
  }
  return res.status(200).json({
    ok: true,
    count: filteredUsers.length,
    users: filteredUsers,
  });
});
app.get("/users/:id", findUser, function (req, res) {
  return res.status(200).json({
    ok: true,
    user: req.user,
  });
});

app.put(
  "/users/:id",
  checkClient,
  validateUpdateUser,
  findUser,
  function (req, res) {
    let { name, email, age } = req.body;

    if (name !== undefined) {
      req.user.name = name;
    }

    if (email !== undefined) {
      req.user.email = email;
    }

    if (age !== undefined) {
      req.user.age = age;
    }

    return res.status(200).json({
      ok: true,
      updated: req.user,
    });
  },
);
app.delete("/users/:id", checkAdmin, findUser, function (req, res) {
  data.users = data.users.filter(function (u) {
    return u.id !== req.user.id;
  });

  return res.status(200).json({
    ok: true,
    deleted: req.user,
  });
});

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
