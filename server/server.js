const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./app");

const URI = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const dbConnect = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("LOG: DB connection successful!");
};
dbConnect().catch(err => console.log("ERROR: ", err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`LOG: Server listening on port ${port}...`);
});
