const mysql = require('mysql');
// create connection
const db = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "simplecalculator"
  });
  
  // connect 
  db.getConnection((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected successfully...')
  })

  module.exports = db;