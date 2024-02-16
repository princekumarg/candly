const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = process.env.MONGO_URI;
const MONGO_OPTIONS = {
  userNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connected");
  } catch (error) {
    console.log("DB failed", error);
    process.exit();
  }
};
module.exports = { connectDB };