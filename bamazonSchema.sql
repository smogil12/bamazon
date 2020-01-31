USE bamazon;

CREATE TABLE products (
  item_id INTEGER(100) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price DECIMAL(10,2),
  stock_quantity INTEGER(100),
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name , department_name, price, stock_quantity)
VALUES ("hue smart lightbulb", "electronics", 30.5, 120);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("haines white t-shirt", "clothing", 5, 1000);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("soda stream", "appliances", 40.60, 300);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("stapler", "office supplies", 4.99, 500);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("parasite", "movies", 19.96, 150);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("spalding basketball", "sports", 9.99, 632);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("fancy feast dog food", "pet supplies", 5.87, 205);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("brita filter", "kitchen", 8.99, 415);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("fire stick", "electronics", 24.99, 600);
INSERT INTO products (product_name , department_name, price, stock_quantity)
VALUES ("echo dot", "electronics", 34.99, 740);
