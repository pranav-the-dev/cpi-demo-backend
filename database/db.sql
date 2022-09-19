-- to create a new database
CREATE DATABASE cpiDemo;

-- to use database
use cpiDemo;

-- creating a new table
CREATE TABLE student (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(50),
  password VARCHAR(50)
);

-- to show all tables
show tables;

-- to describe table
describe student;


