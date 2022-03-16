-- seeds/01_users.sql
-- users seeds
INSERT INTO users (id, username, email, password) VALUES (1, 'rixter', 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (id, username, email, password) VALUES (2, 'scienceGurl',  'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (id, username, email, password) VALUES (3, 'ZeldasMan', 'link@yahoo.com', 'hyrule');
INSERT INTO users (id, username, email, password) VALUES (4, 'ThatGuySimon', 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (id, username, email, password) VALUES (5, 'Johnson12', 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (id, username, email, password) VALUES (6, 'Mario64', 'mario@mushroomkindom.jp', 'plumber79');

INSERT INTO cities(name, img_link, country, language, population, avg_temp, cost_of_living, internet_speed, safety_rating) 
VALUES ('Paris', '../img/Paris.jpeg', 'France', 'French', 2165423, 25, 'High', 'Fast', 3.8), 
('Edinburgh', '../img/Edinburgh.jpeg', 'Scotland', 'English, Gaelic', 1339380, 18, 'High', 'Fast', 4.9),
('Puerto Vallarta', '../img/puertovallarta.jpeg', 'Mexico', 'Spanish', 275640, 31, 'Low', 'Moderate', 4.9),
('Marrakech', '../img/Marrakech.jpeg', 'Morocco', 'Arabic(Darija), English', 928850, 22, 'Low', 'Good', 4.6),
('Tokyo', '../img/Tokyo.jpeg', 'Japan', 'Japanese', 13960000, 25, 'High', 'Fast', 4.8),
('Honolulu', '../img/Honolulu.jpeg', 'United States', 'English', 900000, 30, 'Low', 'Moderate', 3.6),
('Santorini', '../img/Santorini.jpg', 'Greece', 'Greek', 15000, 28, 'Low', 'Fast', 4.8),
('Bangkok', '../img/Bangkok.jpeg', 'Thailand', 'Thai', 10700000, 31, 'Low', 'Moderate', 4),
('Medellin', '../img/Medellin.jpeg', 'Mexico', 'Spanish', 2569000, 28, 'Moderate', 'Fast', 3.5);

INSERT INTO user_inputs(user_id, city_id, comment, rating)
VALUES(4, 4, 'I like Marrakech, The Sunsets were Beautiful.', 5),
(4, 3, 'I also enjoyed Puerto Vallarta, The sunsets are just as beautiful as Marrakech.', 4.5),
(3, 3, 'I love eating tacos man, they are the best. Even better when you eat them straight out of the street vendors here in Puerto.', 4.5),
(1, 1, 'The museum was pretty nice, as was the Eiffel Tower. But the French were pretty rude once they realized I spoke English.', 2.5);