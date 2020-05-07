// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "sql12.freemysqlhosting.net",
  port: 3306,
  user: "sql12338507",
  password: "thGCqKmB8p",
  database: "sql12338507",
});

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
