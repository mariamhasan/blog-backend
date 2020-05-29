const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  Body: {
    type: String,
    required: true
  },
  photo: { type: String },
  author: { type: String, required: true }
});

module.exports = mongoose.model("Post", postSchema);
