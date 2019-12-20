var mysql = require("mysql");
var axios = require("axios");

var entryPrompt = [
    {
        type: "input", 
        message: "What would you like to purchase today?",
        name: "purchase"
    }
];



var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  
  
});