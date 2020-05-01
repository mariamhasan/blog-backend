const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//set up express
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
console.log("starting server");
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

console.log("connecting to mongodb");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) console.error(err);
    console.log("connection established");
  }
);
