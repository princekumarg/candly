const express = require("express");
const cors = require("cors");
const app = express();

const { connectDB } = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const eventRoutes = require("./routes/eventRoutes");

require("dotenv").config();
connectDB();
app.set(cors());
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/schedule", scheduleRoutes);
app.use("/api/v1/event", eventRoutes);

app.listen(3001, () => {
  console.log("Server is running at 3001");
});