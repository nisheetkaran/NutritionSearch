const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/nutrition', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const foodSchema = new mongoose.Schema({
  search: String,
  results: Array,
});

const Food = mongoose.model('Food', foodSchema);

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/search', async (req, res) => {
  const { foodName } = req.body;

  let food = await Food.findOne({ search: foodName });
  if (food) {
    return res.send(food.results);
  }

  const apiUrl = `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(foodName)}`;
  const headers = {
    'x-app-id': process.env.NUTRITIONIX_APP_ID,
    'x-app-key': process.env.NUTRITIONIX_API_KEY,
  };

  try {
    const response = await axios.get(apiUrl, { headers });
    const topResults = response.data.branded.slice(0, 5).map(item => ({
      name: item.food_name,
      calories: item.nf_calories,
    }));

    food = new Food({ search: foodName, results: topResults });
    await food.save();

    res.send(topResults);
  } catch (error) {
    console.error('Error fetching data from Nutritionix:', error);
    res.status(500).send('Error fetching data from Nutritionix');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
