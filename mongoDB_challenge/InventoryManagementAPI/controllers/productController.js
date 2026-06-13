const Product = require("../models/Product");
const createProduct = async function (req, res) {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

const getProducts = async function (req, res) {
  try {
    const { category, inStock, limit, skip, sortBy, order } = req.query;
    let filter = {};
    if (category) {
      filter.category = category;
    }

    if (inStock) {
      filter.inStock = inStock === "true";
    }
    let sortObj = {};
    if (sortBy) {
      sortObj[sortBy] = order === "desc" ? -1 : 1;
    }

    const products = await Product.find(filter)
      .limit(Number(limit))
      .skip(Number(skip))
      .sort(sortObj);

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getProductById = async function (req, res) {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Invalid ID format",
    });
  }
};

const updateProduct = async function (req, res) {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );

    if (!updateProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(updateProduct);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: "Invalid ID format",
    });
  }
};

const deleteProduct = async function (req, res) {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.status(200).json(deleteProduct);
  } catch (err) {
    console.log(err);
    
    res.status(400).json({
      message: "Invalid ID format",
    });
  }
};
module.exports = {
   createProduct,
   getProducts,
   getProductById,
   updateProduct,
   deleteProduct
};