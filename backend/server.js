const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const noteRoutes = require("./routes/Note");

// Configuration for environment variables
dotenv.config({
  path: "./config.env",
});

// Replace the placeholder in the connection string with the actual password
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Connect to MongoDB
mongoose
  .connect(DB, {})
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

// Middleware to parse JSON data
app.use(express.json());

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

//Use the Note routes
app.use("/api/notes", noteRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
