const { getAllAirports } = require('../services/dbService');

exports.getAirports = (req, res) => {
  getAllAirports()
    .then(airports => res.json(airports))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
};