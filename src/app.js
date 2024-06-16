const express = require("express");
const app = express();
const path = require("path");

const port =  3001;

app.use(express.static("assets"));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/home/index.html"));
});

app.get("/showcase", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/showcase/"));
});

app.listen(port, () => {
  console.log(`Server started on port ${port} | http://localhost:3001`);
});
