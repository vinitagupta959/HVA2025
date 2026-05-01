function validateUserQuery(req, res, next) {
  let search = req.query.search;
  let page = req.query.page;
  let limit = req.query.limit;
  let sort = req.query.sort;
  let order = req.query.order;

  let errors = [];
  if (page !== undefined) {
    page = Number(page);
    if (!Number.isInteger(page) || page <= 0) {
      errors.push({
        field: "page",
        message: "Page must be greater than 0"
      });
    }
  } else {
    page = 1;
  }
  if (limit !== undefined) {
    limit = Number(limit);
    if (!Number.isInteger(limit) || limit < 1 || limit > 50) {
      errors.push({
        field: "limit",
        message: "Limit must be between 1 and 50"
      });
    }
  } else {
    limit = 10;
  }
  let allowedSort = ["name", "email", "id"];
  if (sort !== undefined) {
    if (!allowedSort.includes(sort)) {
      errors.push({
        field: "sort",
        message: "Sort must be name, email, or id"
      });
    }
  } else {
    sort = "id";
  }
  if (order !== undefined) {
    if (order !== "asc" && order !== "desc") {
      errors.push({
        field: "order",
        message: "Order must be asc or desc"
      });
    }
  } else {
    order = "asc";
  }
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      data: errors,
      message: "Validation failed"
    });
  } 
  req.queryOptions = {
    search: search,
    page: page,
    limit: limit,
    sort: sort,
    order: order
  };

  next();
}
function validateReqBody(req, res, next) {
  let { name, email } = req.body;
  let errors = [];

  if (!name || typeof name !== "string" || name.trim() === "") {
    errors.push({
      field: "name",
      message: "Name is required and must be a non-empty string",
    });
  }

  if (!email || typeof email !== "string" || !email.includes("@")) {
    errors.push({
      field: "email",
      message: "Email must be valid",
    });
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

function validateId(req, res, next) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      data: [{ field: "id", message: "Id must be a positive integer" }],
      message: "Validation failed",
    });
  }

  next();
}

module.exports = {validateUserQuery,validateId,validateReqBody};
