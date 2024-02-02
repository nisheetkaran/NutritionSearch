const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router.post('/search', foodController.searchFood);

module.exports = router;
