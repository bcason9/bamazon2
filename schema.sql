DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT(10) NOT NULL
    PRIMARY KEY(item_id)
)

SELECT * from products;

INSERT INTO products(product_name, department_name, price, quantity)
VALUES ("Nintendo Switch", "Entertainment", 299.99, 25),
    ("Mario Odyssey", "Entertainment", 59.99, 10),
    ("Nike Hoodie", "Clothing", 49.99, 15),
    ("Throw Blanket", "Bedding", 15.99, 20),
    ("Avengers: Infinity War", "Entertainment", 39.99, 10),
    ("Deluxe Tent", "Camping", 49.99, 5),
    ("Hiking Boots", "Footwear", 34.99, 10),
    ("Running Shoes", "Footwear", 39.99, 10),
    ("Baseball Bat", "Sporting Goods", 19.99, 10),
    ("Camping Hatchet", "Camping", 14.99, 20)