const express = require("express");
const app = express();

app.post("/save", (req, res) => {
  res.send("POST Method Executed");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
