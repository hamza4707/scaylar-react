const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const meetupRouter = require("./routes/meetupRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.post("/", (req, res) => {
//   res.status(201).json({
//     status: "success",
//   });
// });

app.use("/", userRouter);
app.use("/api/v1", meetupRouter);
module.exports = app;
