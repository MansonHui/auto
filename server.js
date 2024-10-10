const express = require("express");
const cors = require("cors");
const userLogin = require("./examples/UserLogin");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.end("Hello World");
});

app.post("/userLogin", userLogin);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});