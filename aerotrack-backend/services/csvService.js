const fs = require('fs');
const csv = require('csv-parser');
const { Airport, sequelize } = require('../models/airport');

const importAirportsFromCSV = async () => {
  const promises = [];

  fs.createReadStream('../data/airports.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (row.type === 'large_airport' || row.type === 'medium_airport') {
        const airportData = {
          type: row.type,
          name: row.name,
          lat: parseFloat(row.latitude_deg),
          lon: parseFloat(row.longitude_deg),
          elevation_ft: row.elevation_ft ? parseInt(row.elevation_ft) : null,
          continent: row.continent,
          iso_country: row.iso_country,
          iso_region: row.iso_region,
          municipality: row.municipality,
          scheduled_service: row.scheduled_service,
          gps_code: row.gps_code,
          iata_code: row.iata_code,
          local_code: row.local_code,
          home_link: row.home_link,
          wikipedia_link: row.wikipedia_link
        };

        const insertPromise = Airport.create(airportData)
          .catch(err => console.error('Ошибка при вставке записи:', err));

        promises.push(insertPromise);
      }
    })
    .on('end', async () => {
      await Promise.all(promises);
      console.log('CSV успешно загружен');
      await sequelize.close();
    });
};

const init = async () => {
  await sequelize.sync(); 
  importAirportsFromCSV();
};

init();

module.exports = { importAirportsFromCSV };
