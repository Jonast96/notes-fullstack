// app.js

const express = require("express");
const app = express();
const noteRoutes = require("./routes/Note");

// Middleware to parse JSON data
app.use(express.json());

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Default route.");
});

// Use the Note routes
app.use("/api/notes", noteRoutes);

module.exports = app;
