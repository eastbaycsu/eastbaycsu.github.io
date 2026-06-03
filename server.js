const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle BMI data
app.post('/bmi', (req, res) => {
  const { height, weight, bmi } = req.body;
  const entry = {
    height: Number(height),
    weight: Number(weight),
    bmi: Number(bmi),
    date: new Date().toISOString()
  };

  // Read existing data
  fs.readFile('data.json', (err, data) => {
    let json = [];
    if (!err && data.length > 0) {
      json = JSON.parse(data);
    }

    // Add new entry
    json.push(entry);

    // Write updated data back to file
    fs.writeFile('data.json', JSON.stringify(json, null, 2), (err) => {
      if (err) {
        console.error('Error writing to data.json:', err);
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).send('BMI data saved successfully!');
    });
  });
});

// one more endpoint

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
