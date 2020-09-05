const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "HELLO",
  database: "burgers_db"
});

//make connection
connection.connect(function(err) {
  if (err) {
    console.error("There is an error");
    return;
  }
  console.log("You are connected");
});

// Export connection for our ORM to use.
module.exports = connection;
