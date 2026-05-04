function validateEmail(req, res, next) {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({
      success: false,
      data: [{ field: "email", message: "Email is required" }],
      message: "Validation failed",
    });
  }

  if (email.indexOf("@") === -1) {
    return res.status(400).json({
      success: false,
      data: [{ field: "email", message: "Invalid email format" }],
      message: "Validation failed",
    });
  }

  let parts = email.split("@");
  if (parts.length !== 2) {
    return res.status(400).json({
      success: false,
      data: [{ field: "email", message: "Invalid email format" }],
      message: "Validation failed",
    });
  }

  let domain = parts[1];
  if (domain.indexOf(".") === -1) {
    return res.status(400).json({
      success: false,
      data: [{ field: "email", message: "Invalid email format" }],
      message: "Validation failed",
    });
  }

  next();
}



function validateUserFields(req, res, next) {
  const name = req.body.name;
  const role = req.body.role;

  const errors = [];

  if (!name) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!role) {
    errors.push({ field: "role", message: "Role is required" });
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

module.exports ={validateUserFields,validateEmail};