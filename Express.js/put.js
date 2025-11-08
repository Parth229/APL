const express = require("express");
const app = express();

app.put("/update", (req, res) => {
  res.send("PUT Method Executed");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
