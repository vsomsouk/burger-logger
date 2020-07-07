const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // port
  port: 3306,

  //  username
  user: "root",

  // password
  password: "HELLO",
  database: "burgers_db"
});