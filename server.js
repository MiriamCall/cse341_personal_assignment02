// Import Statements
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./db/db_connect");

// Initializations (variables, constants, etc.)
const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

// middleware
app.use(express.json());

// Routes
app.use("/", require("./routes/index"));

// Server (Listen)
app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
