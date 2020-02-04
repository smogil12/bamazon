var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table3");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "1234",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  welcome();
});

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

function inventory() {
  var table = new Table({
    head: ["ID", "Item", "Department", "Price", "Stock"],
    colWidths: [10, 30, 30, 30, 30]
  });

  listInventory();

  function listInventory() {
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        var itemId = res[i].item_id,
          productName = res[i].product_name,
          departmentName = res[i].department_name,
          price = res[i].price,
          stockQuantity = res[i].stock_quantity;

        table.push([itemId, productName, departmentName, price, stockQuantity]);
      }
      console.log(table.toString());
      purchasePrompt();
    });
  }
}

function purchasePrompt() {
  inquirer
    .prompt([
      {
        name: "purchase",
        message: "Would you like to purchase an item?",
        type: "confirm",
        default: true
      }
    ])
    .then(function(user) {
      if (user.purchase === true) {
        storePrompt();
      } else {
        console.log("Come back again another day!");
        welcome();
      }
    });
}
