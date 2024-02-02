const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  search: String,
  results: Array,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
