// routes/Note.js

const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// Fetch all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
