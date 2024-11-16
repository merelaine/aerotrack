const express = require('express');
const router = express.Router();
const { getAirports } = require('../controllers/airportsController');

router.get('/airports', getAirports);

module.exports = router;