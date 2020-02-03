var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "1234",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function welcome() {
  inquirer
    .prompt([
      {
        name: "welcome",
        message: "Welcome to Bamazon! Would you like to continue?",
        type: "confirm",
        default: true
      }
    ])
    .then(function(user) {
      if (user.welcome === true) {
        inventory();
      } else {
        console.log("Thank you!");
        welcome();
      }
    });
}
