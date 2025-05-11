const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const DB_URL = process.env.MONGO_URL || 'mongodb://mongo:27017/test';

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Mongo error', err));

app.get('/', (req, res) => res.send('Hello from Node.js API'));
app.listen(PORT, () => console.log(API running on port ${PORT}));