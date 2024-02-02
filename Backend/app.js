const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/nutrition', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Use routes
app.use(foodRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
