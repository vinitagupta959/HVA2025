const express = require("express");
const router = express.Router();

const {creatingPost,getAllpost,getPostById,updatePostById,deletePost }= require("../controller/postController");

router.post("/posts", creatingPost);
router.get("/posts", getAllpost);
router.get("/posts/:id", getPostById);
router.put("/posts/:id", updatePostById);
router.delete("/posts/:id", deletePost);

module.exports = router;