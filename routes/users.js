const express = require("express");
const router = express.Router();

// Models
const User = require("../models/users");

// Middleware
const getUser = require("../middleware/getUserById");

// Getting all
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get("/:id", getUserById, (req, res) => {
  res.send(res.user.data.name);
});

// Creating one
router.post("/", async (req, res) => {
  const user = new User({
    data: { name: req.body.name, testDate: req.body.testDate },
  });
  try {
    const newuser = await user.save();
    res.status(201).send(newuser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one
router.patch("/:id:", (req, res) => {});

// Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
