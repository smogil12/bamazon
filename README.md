# Bamazon Project: Columbia University

### Main Feature

The main feature of this app is a client-facing portal that lets a user view all of the products in a mock warehouse, and then can decide how many units of a specific item that they would like to purchase. If there aren't enough items to fufill the customer's order, then the console will tell them so.

### Technology used:

This application uses Javascript and Node.js. Additionally, several NPM packages were installed to run it. They are mysql, inquirer, and cli-table3.

### How to Use the Application

- Run node bamazonCustomer.js

![Welcome Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%201.10.02%20PM.png?raw=true)

- Type in Y as prompted by the application. Then a table of the products will be shown:

![Warehouse Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%201.11.51%20PM.png?raw=true)

- The application will ask if you would like to purchase an item. Type in Y. Then, type in the item ID of the product that you would like to purchase.

![item id Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%201.32.30%20PM.png?raw=true)

- After you type in your products item ID, you will be asked how many items you would like to purchase. If you request for more than is available in inventory, you will be told that there is not enough stock, then you will be taken back to the home screen message.

![not enough stock Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%203.38.03%20PM.png?raw=true)

- However, if there is enough stock, you will be shown a checkout reciept, and then you will be prompted to check out:

![receipt Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%203.42.01%20PM.png?raw=true)

- Once you say yes to proceeding with your purchase, you will get a message saying "Purchase Complete" and then you will be taken back to the welcome screen.

* What's cool about the app is that since five basketball purchased, the change in quantity of stock is reflected in the database:

![stock Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%203.46.48%20PM.png?raw=true)

The quantity went down from 630 to 625 since 5 basketballs were purchased!

![stock Img](https://github.com/smogil12/bamazon/blob/master/images/Screen%20Shot%202020-02-04%20at%203.47.02%20PM.png?raw=true)
