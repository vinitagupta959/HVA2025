const express = require("express");
const app = express();
app.use(express.json());
let users = [];
let currentId = 1;

app.get("/api/v1/users", function (req, res) {
  res.status(200).json({
    success: true,
    data: users,
    message: "Users fetched",
  });
});

app.post("/api/v1/users", function (req, res, next) {
  let { name, email } = req.body;
  let errors = [];

  if (!name) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!email) {
    errors.push({ field: "email", message: "Email is required" });
  }

  if (email && !email.includes("@")) {
    errors.push({ field: "email", message: "Invalid email format" });
  }

  if (errors.length > 0) {
    return next({ status: 400, errors,  message: "Validation failed"});
  } else {
    let newUser = {
      id: currentId++,
      name: name,
      email: email,
    };
    users.push(newUser);
    return res.status(201).json({
      success: true,
      data: newUser,
      message: "User created",
    });
  }
});

app.get("/api/v1/users/:id", function (req, res, next) {
  let id = Number(req.params.id);

  if (!id || id <= 0) {
    return next({
      status: 400,
      errors: [{ field: "id", message: "Invalid id" }],
      message: "Validation failed"
    });
  }
  let user = users.find(function (u) {
    return u.id === id;
  });

  if (!user) {
    return next({
      status: 404,
      message: "User not found"
    });
  }else{
    return res.status(200).json({
      success: true,
      data: user,
      message: "User found",
    });
  
  }
  
});
app.put(
  "/api/v1/users/:id",function (req, res,next) {
    let { name, email } = req.body;
 let id = Number(req.params.id);

  if (!id || id <= 0) {
    return next({
      status: 400,
      errors: [{ field: "id", message: "Invalid id" }],
        message: "Validation failed"
    });
  }
let errors = [];

  if (!name) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!email) {
    errors.push({ field: "email", message: "Email is required" });
  }

  if (email && !email.includes("@")) {
    errors.push({ field: "email", message: "Invalid email format" });
  }

  if (errors.length > 0) {
    return next({ status: 400, errors });
  }
   let user = users.find(function (u) {
    return u.id === id;
  });
  if (!user) {
    return next({
      status: 404,
      message: "User not found"
    });
  }else{
    user.name=name;
    user.email=email
    return res.status(200).json({
      success: true,
      data: user,
      message: "User updated",
    });
  }
  }
);





app.delete("/api/v1/users/:id", function (req, res,next) {
  let id = Number(req.params.id);
  if (!id || id <= 0) {
    return next({
      status: 400,
      errors: [{ field: "id", message: "Invalid id" }],
        message: "Validation failed"
    });
  }
  let index = users.findIndex(function (user) {
    return user.id === id;
  });
  if (index === -1) {
    return next({
      status: 404,
      message: "User not found"
    });
  } else {
    users.splice(index, 1);
    return res.status(200).json({
      success: true,
      data: null,
      message: "User deleted",
    });
  }
});


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    data: err.errors || null,
    message: err.message || "Server Error",
  });
});

app.listen(3000, function () {
  console.log("Server is running on the port number 3000");
});
