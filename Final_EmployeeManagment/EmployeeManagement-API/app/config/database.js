const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "YES",
  database: "employ",
});

module.exports = connection;
