const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017';

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
