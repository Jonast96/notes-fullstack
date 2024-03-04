const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note must have a title"],
    unique: true,
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Note must have content"],
    unique: true,
    trim: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
