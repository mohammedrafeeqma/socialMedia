const express = require("express");
const router = express.Router();
const User = require('../modals/User')

router.post("/login", (req, res) => {
  const username = "rafeeq";
  const password = "123";
  if (username === req.body.username && password == req.body.password) {
    res.status(200).json("login success");
  } else {
    res.status(400).json("incorrect password or username");
  }
});

router.get("/usersList", async (req, res) => {
  const user = await User.find()
  console.log(user);
  res.json(user)
});
module.exports = router;
