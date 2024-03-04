const Note = require("../models/Note");

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({
      status: "success",
      results: notes.length,
      data: {
        notes,
      },
    });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Server error");
  }
};

exports.createNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        note,
      },
    });
  } catch (error) {
    console.error("Error creating note:", error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({
        status: "fail",
        message: "Validation failed",
        errors: messages,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Failed to create the note.",
      });
    }
  }
};
