const fs = require('fs');
const csv = require('csv-parser');
const { Pool } = require('pg');
const databaseConfig = require('../config/database');

const pool = new Pool(databaseConfig);

const importAirportsFromCSV = async () => {
  const promises = [];

  fs.createReadStream('../data/airports.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (row.type !== 'heliport' && row.type !== 'closed') {
        const query = `
          INSERT INTO airports (type, name, latitude_deg, longitude_deg, elevation_ft, continent, iso_country, iso_region, municipality, scheduled_service, gps_code, iata_code, local_code, home_link, wikipedia_link) 
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        `;
        const values = [
          row.type,
          row.name,
          parseFloat(row.latitude_deg),
          parseFloat(row.longitude_deg),
          row.elevation_ft ? parseInt(row.elevation_ft) : null,
          row.continent,
          row.iso_country,
          row.iso_region,
          row.municipality,
          row.scheduled_service,
          row.gps_code,
          row.iata_code,
          row.local_code,
          row.home_link,
          row.wikipedia_link
        ];

        const insertPromise = pool.query(query, values)
          .catch(err => console.error('Ошибка при вставке записи:', err));

        promises.push(insertPromise);
      }
    })
    .on('end', async () => {
      await Promise.all(promises);
      console.log('CSV успешно загружен');
      await pool.end();
    });
};

importAirportsFromCSV();

module.exports = { importAirportsFromCSV };