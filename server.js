// server.js

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Enable CORS to allow requests from your React app (adjust origins as needed)
app.use(cors());

// Configure your MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lipton54.",
  database: "blogdb",
});

// Connect to MySQL (same as in your original code)

// Define an API endpoint to retrieve data
app.get("/", (req, res) => {
  connection.query("SELECT * FROM blogposts", (err, results, fields) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Return the results as JSON
    res.json(results);
  });
});

// Start your Express server
const port = 3001; // Choose an available port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
