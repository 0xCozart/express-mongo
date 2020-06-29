const express = require("express");
const router = express.Router();

// Models
const User = require("../models/users");

// Middleware
const getUserById = require("../middleware/getUserById");

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
  res.json(res.user);
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
router.patch("/:id:", getUserById, async (req, res) => {
  if (req.body.name != null) res.user.data.name = req.body.name;

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/:id", getUserById, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
