const router = require("express").Router();
const Post = require("../models/postModel");
const upload = require("../middlewares/uploads");
// var upload = multer({ dest: "uploads/" });

router.post("/upload", async (req, res) => {
  // const photo = req.file;
  //add photo here

  //construct the post model
  let file = req.file;
  let author = req.body.author;
  console.log(file);
  console.log(req.body);

  //retrieve the data from the request
  const newPost = new Post({
    title: req.body.title,
    tags: req.body.tags,
    Body: req.body.Body,
    author: req.body.author,
    photo: `${req.protocol}://${req.headers.host}/uploads/${
      req.file
        ? req.file.filename
        : `${req.protocol}://${req.headers.host}/uploads/Blog.jpg`
    }`
  });

  //save post model
  try {
    const savedPost = await newPost.save();
    // console.log(savedPost);
    res.json(savedPost);
  } catch (err) {
    res.status(400).json(err);
    console.error(err);
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});

module.exports = router;
