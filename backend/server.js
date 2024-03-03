const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// GET route
app.get("/", (req, res) => {
  res.status(200).send("Hello, world!");
});

// POST route
app.post("/", (req, res) => {
  console.log(req.body); // Log the request body to the console
  res.status(200).send("Data received!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
