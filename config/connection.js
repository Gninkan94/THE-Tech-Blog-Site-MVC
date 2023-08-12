const Sequelize = require('sequelize');
require('dotenv').config(); //this will Import sensitive data from .env file
const sequelize = process.env.JAWSDB_URL 
  ? new Sequelize(process.env.JAWSDB_URL) //this is a JAWSDB_URL  for HEROKU
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { 
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;