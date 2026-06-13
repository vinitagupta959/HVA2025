const Post = require("../model/Post");

async function creatingPost(req, res) {
  try {
    const post = await Post.create(req.body);

    return res.status(201).json({
      status: "ok",
      message: "Post created successfully",
      data: post,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
}

async function getAllpost(req, res) {
  try {
    let { author, includeDrafts, limit, skip, sortBy, order } = req.query;
    let filter = {};
    if (author) {
      filter.author = author;
    }
    if (includeDrafts !== "true") {
      filter.published = true;
    }
    
    let query = Post.find(filter)
      .sort({
        [sortBy]: order === "desc" ? -1 : 1,
      })
      .limit(Number(limit))
      .skip(Number(skip));
    console.log(query);

    const posts = await query;

    return res.status(200).json({
      status: "ok",
      data: posts,
    });
  } catch (err) {
  return res.status(400).json({
    status: "failed",
    message: err.message,
  });
}
}

async function getPostById(req, res) {
  try {
    let post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({
        ok: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      ok: true,
      data: post,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      message: "Invalid post ID",
    });
  }
}

async function updatePostById(req, res) {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({
        ok: false,
        message: "Post not found",
      });
    }
    return res.status(200).json({
      ok: true,
      data: updatedPost,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      message: "Invalid post ID",
    });
  }
}

async function deletePost(req, res) {
  try {
    let post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({
        ok: false,
        message: "Post not found",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Post deleted",
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      message: "Invalid post ID",
    });
  }
}

module.exports = {
  creatingPost,
  getAllpost,
  getPostById,
  updatePostById,
  deletePost,
};
