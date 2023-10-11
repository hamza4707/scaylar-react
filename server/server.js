const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const port = 8000;
app.listen(port, () => {
  console.log(`LOG: Listening on port ${port}...`);
});
