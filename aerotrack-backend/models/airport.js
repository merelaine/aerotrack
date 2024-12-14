const { Sequelize, DataTypes } = require('sequelize');
const databaseConfig = require('../config/db_config');

const sequelize = new Sequelize(databaseConfig.database, databaseConfig.user, databaseConfig.password, {
  host: databaseConfig.host,
  dialect: 'postgres',
  port: databaseConfig.port
});

const Airport = sequelize.define('Airport', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING(50)
  },
  name: {
    type: DataTypes.STRING(255)
  },
  lat: {
    type: DataTypes.DECIMAL(9, 6)
  },
  lon: {
    type: DataTypes.DECIMAL(9, 6)
  },
  elevation_ft: {
    type: DataTypes.INTEGER
  },
  continent: {
    type: DataTypes.STRING(2)
  },
  iso_country: {
    type: DataTypes.CHAR(2)
  },
  iso_region: {
    type: DataTypes.STRING(10)
  },
  municipality: {
    type: DataTypes.STRING(100)
  },
  scheduled_service: {
    type: DataTypes.STRING(3)
  },
  gps_code: {
    type: DataTypes.STRING(10)
  },
  iata_code: {
    type: DataTypes.STRING(10)
  },
  local_code: {
    type: DataTypes.STRING(10)
  },
  home_link: {
    type: DataTypes.TEXT
  },
  wikipedia_link: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'airports',
  timestamps: false
});

module.exports = { Airport, sequelize };
