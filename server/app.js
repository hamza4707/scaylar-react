const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/", (req, res) => {
  res.status(201).json({
    status: "success",
  });
});
module.exports = app;
