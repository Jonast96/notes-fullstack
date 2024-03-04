// server.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

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

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
