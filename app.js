const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(cors());

// GET
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  let { count } = req.body;
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
