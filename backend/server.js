const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan");
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");
  } catch (error) {
    throw error;
  }
};

// middilewares
app.use(logger("dev"));
app.use(express.json());

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`sunucu ${5000} protunda`);
});
