const { Sequelize } = require('sequelize');
//require('dotenv').config();
//const  { config } = require("../config/config");
const dbConfig = require("../config/config");
const setupModels = require('./../db/models');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'postgres',
  port: dbConfig.PORT
});

/*
const sequelize = new Sequelize(
    config.dbName, // name database
    config.dbUser, // user database
    config.dbPassword, // password database
    {
      dialect: 'postgres',
      host: config.dbHost,
      port: config.dbPort

    }
  );

  */

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;