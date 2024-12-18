const { Client } = require('pg');
const databaseConfig = require('../config/db_config');

const client = new Client(databaseConfig);

client.connect();

const getAllAirports = async () => {
  const query = 'SELECT * FROM airports';
  const result = await client.query(query);
  return result.rows;
};

module.exports = {
  getAllAirports,
};