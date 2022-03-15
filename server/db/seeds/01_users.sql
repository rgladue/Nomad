-- seeds/01_users.sql
-- users seeds
INSERT INTO users (id, username, email, password) VALUES (1, 'rixter', 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (id, username, email, password) VALUES (2, 'scienceGurl',  'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (id, username, email, password) VALUES (3, 'ZeldasMan', 'link@yahoo.com', 'hyrule');
INSERT INTO users (id, username, email, password) VALUES (4, 'ThatGuySimon', 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (id, username, email, password) VALUES (5, 'Johnson12', 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (id, username, email, password) VALUES (6, 'Mario64', 'mario@mushroomkindom.jp', 'plumber79');

INSERT INTO cities(name, img_link, country, language, population, avg_temp, cost_of_living, internet_speed, safety_rating) 
VALUES ('Paris', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dw.com%2Fen%2Ficonic-european-cities-paris%2Fg-60210186&psig=AOvVaw3rt5OB_Dw7SgVyZ_RrXqCS&ust=1647288612666000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDCktbyw_YCFQAAAAAdAAAAABAU', 'France', 'French', 2165423, 25, 'High', 'Fast', 3.8), 
('Edinburgh', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cntraveler.com%2Fgallery%2Fbest-things-to-do-in-edinburgh&psig=AOvVaw32qiUTBNNW_u0QkMVLjxXT&ust=1647289059646000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiT1o30w_YCFQAAAAAdAAAAABAD', 'Scotland', 'English, Gaelic', 1339380, 18, 'High', 'Fast', 4.9),
('Puerto Vallarta', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sunwing.ca%2Fen%2Fdestinations%2Fmexico%2Fpuerto-vallarta&psig=AOvVaw35Y2ggbz6trVPmTaOGiek2&ust=1647289274489000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiTmfP0w_YCFQAAAAAdAAAAABAI', 'Mexico', 'Spanish', 275640, 31, 'Low', 'Moderate', 4.9),
('Marrakech', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kimkim.com%2Fc%2Fultimate-guide-to-marrakech&psig=AOvVaw370gA_apiAWbNCBaQKaB3F&ust=1647289543551000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDg2fT1w_YCFQAAAAAdAAAAABAD', 'Morocco', 'Arabic(Darija), English', 928850, 22, 'Low', 'Good', 4.6);

INSERT INTO user_inputs(user_id, city_id, comment, rating)
VALUES(4, 4, 'I like Marrakech, The Sunsets were Beautiful.', 5),
(4, 3, 'I also enjoyed Puerto Vallarta, The sunsets are just as beautiful as Marrakech.', 4.5),
(3, 3, 'I love eating tacos man, they are the best. Even better when you eat them straight out of the street vendors here in Puerto.', 4.5),
(1, 1, 'The museum was pretty nice, as was the Eiffel Tower. But the French were pretty rude once they realized I spoke English.', 2.5);