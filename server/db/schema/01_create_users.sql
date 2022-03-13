-- schema/01_create_users.sql
DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS city CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
-- CREATE USERS
CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255)
);
 
CREATE TABLE city (
id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
img_link VARCHAR(255),
country VARCHAR(255),
language VARCHAR(255),
population INT
avg_temp INT,
cost_of_living VARCHAR(255),
internet_speed VARCHAR(255),
safety_rating VARCHAR(255)
);

CREATE TABLE user_inputs (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  city_id INT,
  comment VARCHAR(255) NOT NULL,
  rating INT
);