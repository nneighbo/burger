var mysql = require("mysql")
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { 
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "root",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection