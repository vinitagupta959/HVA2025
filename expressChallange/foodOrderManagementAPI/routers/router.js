const express = require("express");
const router = express.Router();
let menuItems = [];
let orders = [];

router.post("/menuItems", function (req, res) {
  let errors = [];
  if (!req.body.name) {
    errors.push("Name is required");
  }
  if (typeof req.body.name != "string") {
    errors.push("Name must be a string");
  }
  if (!req.body.category) {
    errors.push("Category is required");
  }
  if (typeof req.body.category != "string") {
    errors.push("Category must be a string");
  }

  if (!req.body.price) {
    errors.push("Price is required");
  }
  if (typeof req.body.price != "number") {
    errors.push("Price must be a number");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors: errors,
      message: "Validation failed",
    });
  } else {
    let newMenuItem = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
    };
    menuItems.push(newMenuItem);
    res.status(201).json({
      success: true,
      data: newMenuItem,
      message: "New menu item added.",
    });
  }
});

router.get('/menuItems',function(req,res){
    res.status(200).json({
        "success":true,
        "data":menuItems,
        "message":"All Items fetched"
    })
})



module.exports = router;
