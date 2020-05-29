const router = require("express").Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { error } = Joi.validate(req.body, schema);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  //save user model
  try {
    const savedUser = await user.save();
    // console.log(savedUser);
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
