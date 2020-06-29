const express = require("express");
const router = express.Router();

// Models
const Tester = require("../models/testers");

// Getting all
router.get("/", async (req, res) => {
  try {
    const testers = await Tester.find();
    res.send(testers);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

// Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Creating one
router.post("/", async (req, res) => {
  try {
    const tester = new Tester({
      data: { name: "Alan", testDate: Date.now },
    });
  } catch (e) {
    res.status(500).json({ message: err.message });
  }
});

// Updating one
router.patch("/:id:", (req, res) => {});

// Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
