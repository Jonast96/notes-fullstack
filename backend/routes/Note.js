// routes/Note.js

const express = require("express");

const noteController = require("../controllers/noteController");
const router = express.Router();

// All notes

router
  .get("/", noteController.getAllNotes)
  .post("/", noteController.createNote);

module.exports = router;
