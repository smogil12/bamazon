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

function storePrompt() {
  inquirer
    .prompt([
      {
        name: "inputId",
        message: "Please select the item ID to purchase.",
        type: "input"
      },
      {
        name: "inputQuantity",
        message: "How much quantity would you like to purchase?",
        type: "input"
      }
    ])
    .then(function(userPurchase) {
      connection.query(
        "SELECT * FROM products WHERE item_id=?",
        userPurchase.inputId,
        function(err, res) {
          for (var i = 0; i < res.length; i++) {
            if (userPurchase.inputQuantity > res[i].stock_quantity) {
              console.log("Sorry! Not enough stock. Try again.");
              welcome();
            } else {
              console.log("We will process your order.");
              console.log("Item selected:");
              console.log("Item: " + res[i].product_name);
              console.log("Department: " + res[i].department_name);
              console.log("Price: " + res[i].price);
              console.log("Quantity: " + userPurchase.inputQuantity);
              console.log(
                "Total: " + res[i].price * userPurchase.inputQuantity
              );

              var newStock = res[i].stock_quantity - userPurchase.inputQuantity;
              var purchaseId = userPurchase.inputId;
              orderPrompt(newStock, purchaseId);
            }
          }
        }
      );
    });
}

function orderPrompt(newStock, purchaseId) {
  inquirer
    .prompt([
      {
        name: "confirmOrder",
        message: "Would you like to proceed with this purchase?",
        type: "confirm",
        default: true
      }
    ])
    .then(function(userConfirm) {
      if (userConfirm.confirmOrder === true) {
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: newStock
            },
            {
              item_id: purchaseId
            }
          ],
          function(err, res) {}
        );
        console.log("Purchase Complete! Thank you and have a great day");
        welcome();
      } else {
        console.log("Try again later!");
        welcome();
      }
    });
}
