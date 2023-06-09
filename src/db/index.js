const mysql = require('mysql2/promise');

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
}

const connection = mysql.createPool(sqlConfig);

module.exports = connection;
