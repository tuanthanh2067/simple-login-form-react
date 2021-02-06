const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
require("dotenv").config();

// routes
const userRoute = require("./routes/user");

const uri = process.env.MONGODB_CONNECTION_CODE;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Successfully connected to db"))
  .catch((error) => console.log(error));

app.use("/", userRoute);

app.listen(PORT, () => {
  console.log("server listening on: " + PORT);
});
