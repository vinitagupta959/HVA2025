const data = require("../data/user");

function checkJson(req, res, next) {
  const contentType = req.headers["content-type"];

  if (!contentType || !contentType.includes("application/json")) {
    return res.status(415).json({
      ok: false,
      message: "Content-Type must be application/json",
    });
  }

  next();
}

function validateCreateUser(req, res, next) {
  let { name, email, age } = req.body;

  let errors = [];

  if (typeof name !== "string" || name.trim() === "") {
    errors.push("Invalid name");
  }

  if (typeof email !== "string" || email.trim() === "") {
    errors.push("Invalid email");
  }

  if (typeof age !== "number" || age < 1) {
    errors.push("Invalid age");
  }

  if (errors.length > 0) {
    return res.status(422).json({
      ok: false,
      message: errors,
    });
  }

  next();
}

function checkClient(req, res, next) {
  const client = req.headers["x-client"];

  if (!client) {
    return res.status(401).json({
      ok: false,
      message: "Unauthorized",
    });
  }

  if (client !== "postman") {
    return res.status(403).json({
      ok: false,
      message: "Forbidden",
    });
  }

  next();
}

function checkAdmin(req, res, next) {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res.status(401).json({
      ok: false,
      message: "Unauthorized",
    });
  }

  if (auth !== "Bearer admin") {
    return res.status(403).json({
      ok: false,
      message: "Forbidden",
    });
  }

  next();
}

function validateUpdateUser(req, res, next) {
  let { name, email, age } = req.body;

  if (name !== undefined && (typeof name !== "string" || name.trim() === "")) {
    return res.status(422).json({
      ok: false,
      message: "Invalid name",
    });
  }

  if (
    email !== undefined &&
    (typeof email !== "string" || email.trim() === "")
  ) {
    return res.status(422).json({
      ok: false,
      message: "Invalid email",
    });
  }

  if (age !== undefined && (typeof age !== "number" || age < 1)) {
    return res.status(422).json({
      ok: false,
      message: "Invalid age",
    });
  }

  next();
}


function findUser(req, res, next) {
  let userId = parseInt(req.params.id);

  let user = data.users.find(function (u) {
    return u.id === userId;
  });

  if (!user) {
    return res.status(404).json({
      ok: false,
      message: "User not found",
    });
  }
  req.user = user;
  next();
}

module.exports={
    checkJson,checkClient,checkAdmin,validateCreateUser,validateUpdateUser,findUser
}