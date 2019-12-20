DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	id int(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price int(10) NOT NULL,
    stock int(10) NOT NULL
);

INSERT INTO products(product_name, department_name, price, stock)
VALUE("Macbook Pro", "Computer and Electronics", 1200, 12);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Muscletech Protein Powder", "Fitness and Nutriton", 50, 100);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Metal Swing Arm Lamp", "Household Appliances", 25, 50);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Yakuza 2", "Video Games", 40, 10);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Death Stranding", "Video Games", 40, 10);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("ON Preworkout Bluberry", "Fitness and Nutrition", 17, 20);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Asus GTX1060 Graphics Card", "Computer and Electronics", 200, 20);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Steelseries Mouse RIVAL 310", "Computer and Electronics", 40, 10);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("48 Pack Soundproof Foam", "Household Appliances", 24, 10);
INSERT INTO products(product_name, department_name, price, stock)
VALUE("Pokemon Lost Thunder Booster Box", "Toys and Games", 100, 10);
