require('dotenv').config();

/*
const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3001,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT
}
*/
const config  = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "T4p1r2sIT$",
    DB: "Instrumental-AMB",
    dialect: "postgres",
    PORT: "5432",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };


module.exports = {config};
