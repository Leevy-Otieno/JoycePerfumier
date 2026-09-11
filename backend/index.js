const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();

// 💡 FIX: Make sure this exact line is here to define PORT!
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api", router);

// Connect to Database and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("=================================");
      console.log("🚀 Connected to DB successfully!");
      console.log(`📡 Server is running on port ${PORT}`);
      console.log("=================================");
    });
  })
  .catch((err) => {
    console.log("=================================");
    console.error("❌ Database connection failed!");
    console.error(`Reason: ${err.message || err}`);
    console.log("=================================");
    process.exit(1); 
  });
