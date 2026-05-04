const { users, tasks } = require("../data/memory");

function userIdValidation(req, res, next) {
  let userId=req.params.userId*1
  let user = users.find(function (user) {
    return user.id === userId;
  });
  if (!user) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "User not found",
    });
  }
  next();
}



function taskBodyValidation(req, res, next) {
  let { title, completed } = req.body;
let userId=req.params.userId*1
  let errors = [];
  if (!title) {
    errors.push("Title is required");
  }
  if (typeof title !== "string") {
    errors.push("Title must be string");
  }
 if (completed === undefined) {
  errors.push("Completed is required");
} else if (typeof completed !== "boolean") {
  errors.push("Completed must be a boolean value");
}
  if (!userId) {
    errors.push("User Id is required");
  }
  if (typeof userId !== "number") {
    errors.push("User Id must be a number");
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



module.exports = {userIdValidation,taskBodyValidation};
