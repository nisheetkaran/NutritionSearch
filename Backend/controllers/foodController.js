const Food = require('../models/food');
const axios = require('axios');
require('dotenv').config();

const searchFood = async (req, res) => {
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
};

module.exports = {
  searchFood,
};
