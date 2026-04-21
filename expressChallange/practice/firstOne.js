const express = require("express");
const app = express();

app.use(express.json());
let users = [];
let nextId = 1;

app.get("/api/v1/users", function (req, res) {
  res.status(200).json({
    success: true,
    data: users,
    message: "Users fetched",
  });
});

app.post("/api/v1/users", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
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
    return res.status(400).json({
      success: false,
      data: errors,
      message: "Validation failed",
    });
  } else {
    let newUser = {
      id: nextId++,
      name: req.body.name,
      email: req.body.email,
    };
    users.push(newUser);
    return res.status(201).json({
      success: true,
      data: newUser,
      message: "User created",
    });
  }
});

app.get("/api/v1/users/:id", function (req, res) {
  let id = Number(req.params.id);
  if (!id || id <= 0) {
  return res.status(400).json({
    success: false,
    data: [{ field: "id", message: "Invalid user id" }],
    message: "Validation failed"
  });
}
  let user = users.find(function (user) {
    if (user.id === id) {
      return user;
    }
  });
  if (!user) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  } else {
    return res.status(200).json({
      success: true,
      data: user,
      message: "User found",
    });
  }
});

app.put("/api/v1/users/:id", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let id = Number(req.params.id);
 if (!id || id <= 0) {
  return res.status(400).json({
    success: false,
    data: [{ field: "id", message: "Invalid user id" }],
    message: "Validation failed"
  });
}
  let user = users.find(function (user) {
    if (user.id === id) {
      return user;
    }
  });
  if (!user) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  } else {
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
      return res.status(400).json({
        success: false,
        data: errors,
        message: "Validation failed",
      });
    } else {
      user.name = name;
      user.email = email;
      return res.status(200).json({
        success: true,
        data: user,
        message: "User updated",
      });
    }
  }
});


app.delete('/api/v1/users/:id',function(req,res){
    let id = Number(req.params.id);

if(!id || id<=0){
  return res.status(400).json({
  success: false,
  data: [{ field: "id", message: "Invalid user id" }],
  message: "Validation failed"
});
}
  let index = users.findIndex(function (user) {
    return (user.id === id) 
  });
  if (index===-1) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }else{
    users.splice(index, 1)
    return res.status(200).json({
  success: true,
  data: null,
  message: "User deleted"
})
  }
})

app.listen(3000, function () {
  console.log("Server is running on the Port number 3000");
});
