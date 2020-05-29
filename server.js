const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const { upload } = require("./middlewares/uploads");
const authRoute = require("./routes/authRoutes");
require("dotenv").config();
// const eslint = require("./node_modules/.bin/eslint config.js");

//set up express
const app = express();

//set up middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload);

//set up routes middelwares
app.use("/posts", require("./routes/postRoutes"));
app.use("/api/user", authRoute);

//set up mongoose
console.log("connecting to mongodb");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) return console.error(err);
    //starting connection
    console.log("connection established");
  }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
console.log("starting server");
