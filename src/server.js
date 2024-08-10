// server.js
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8080;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'harini@1709',
  database: 'sample'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});
// server.js
// Correct
app.get('/Diet/get', (req, res) => {
  const query = 'SELECT id, name, type, data FROM images WHERE type = "high-protein"';

  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err); // Fixed parentheses
    res.json(results.map(row => ({
      id: row.id,
      name: row.name,
      type: row.type,
      data: row.data.toString('base64') // Convert binary data to base64 string
    }))); // Fixed parentheses
  }); // Fixed parentheses
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
