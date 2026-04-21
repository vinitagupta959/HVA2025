function validateId(req, res, next) {
  let id = Number(req.params.id);

  if (!id || id <= 0) {
    return res.status(400).json({
      success: false,
      data: [{ field: "id", message: "Invalid user id" }],
      message: "Validation failed"
    });
  }

  next();
}

function findUser(req, res, next) {
  let id = Number(req.params.id);

  let user = req.users.find(function (u) {
    return u.id === id;
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }
  req.user = user;
  next();
}

function validateUserInput(req, res, next) {
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
    return res.status(400).json({
      success: false,
      data: errors,
      message: "Validation failed",
    });
  }

  next();
}

module.exports={validateId,findUser,validateUserInput};