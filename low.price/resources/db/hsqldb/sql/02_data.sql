insert into roles (id, label,                    description,              level) VALUES 
    (1, 'software administrator', 'software administrator', 0),
    (2, 'user', 'registered user', 100);

insert into users 
(id, email,firstname,lastname, password, regdate, role, enabled) VALUES 
(1,'admin@low.price','Marco','Rossi', '$2a$10$505kaO49Nbt/j41HKdwJcuPrIErm1XxEAYa9RDp3fD9dBBA0qMz5K', '2022-12-31', 0, 1),
(2,'maurizio.franco@ymail.com','Maurizio','Franco', '$2a$10$505kaO49Nbt/j41HKdwJcuPrIErm1XxEAYa9RDp3fD9dBBA0qMz5K', '2022-12-31', 100, 1);

insert into departments(id, label, description, level) VALUES (1, 'cibo', 'da mangiare', 0);
insert into departments(id, label, description, level) VALUES (2, 'igiene', 'igiene personale', 50);
insert into departments(id, label, description, level) VALUES (3, 'articoli casa', 'articoli per la casa', 70);
insert into departments(id, label, description, level) VALUES (4, 'pulizia casa', 'pulizia per la casa', 100);
insert into departments(id, label, description, level) VALUES (5, 'articoli per la cucina', 'articoli/pulizia per la cucina', 150);

insert into meals(id, label, description, department_id, level) VALUES (1, 'colazione', 'colazione oppure merenda', 1, 0);
insert into meals(id, label, description, department_id, level) VALUES (2, 'primi', 'pranzo oppure cena', 1, 50);
insert into meals(id, label, description, department_id, level) VALUES (3, 'secondi', 'pranzo oppure cena', 1, 100);
insert into meals(id, label, description, department_id, level) VALUES (4, 'merenda', 'colazione oppure merenda', 1, 150);
insert into meals(id, label, description, department_id, level) VALUES (5, 'frutta', '', 1, 200);
insert into meals(id, label, description, department_id, level) VALUES (6, 'verdura', '', 1, 250);
insert into meals(id, label, description, department_id, level) VALUES (7, 'dolce', '', 1, 350);
insert into meals(id, label, description, department_id, level) VALUES (8, 'materia prima', 'ingrediente per preparati', 1, 400);

insert into meal_categories(id, label, meal_id, level) VALUES (1, 'biscotti', 1, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (2, 'latticini e derivati', 2, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (3, 'frutta', 5, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (4, 'verdura', 6, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (5, 'dolce', 7, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (6, 'cereali', 2, 0);

insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (1, 'biscotti con gocce di cioccolato', 1, 1, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (2, 'biscotti alla panna(tipo macine)', 1, 1, 200);
--insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (3, 'biscotti', 1, 1, 0);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (4, 'mozzarelle', 3, 2, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (5, 'provola/scamorza', 3, 2, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (6, 'panettone classico con canditi', 7, 5, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (7, 'verdura cruda', 6, 4, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (8, 'verdura in scatola', 6, 4, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (9, 'verdura surgelata', 6, 4, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (10, 'formaggini', 3, 2, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (11, 'yogurt', 4, 2, 100);

insert into unit_of_measure(id, unit_of_measure_label, level) VALUES (1, 'confezioni', 10);
insert into unit_of_measure(id, unit_of_measure_label, description, level) VALUES (2, 'gr', 'grammi', 100);
insert into unit_of_measure(id, unit_of_measure_label, description, level) VALUES (3, 'l', 'litri', 200);
insert into unit_of_measure(id, unit_of_measure_label, description, level) VALUES (4, 'ml', 'millilitri', 250);
insert into unit_of_measure(id, unit_of_measure_label, description, level) VALUES (5, 'kg', 'chilogrammi', 150);
insert into unit_of_measure(id, unit_of_measure_label, description, level) VALUES (6, 'rotoli', 'rotoli', 20);

insert into brand (brand_id, brand_name, brand_insert_datetime, brand_logo_image_file_name) values
             (1, 'EUROSPIN', '2023-10-02 13:45:00', 'eurospin.png'),
             (2, 'LIDL', '2023-10-04 09:35:00', 'lidl.png'),
             (3, 'IN''S Mercato', '2023-10-23 09:41:00', 'insmercato.png'),
             (4, 'Esselunga', '2023-10-23 18:43:00', 'esselunga.png'),
             (5, 'Unes', '2023-10-31 18:51:00', 'unes.png'),
             (6, 'Iperal', '2023-11-04 18:05:00', 'iperal.png')
             
             ;

insert into store (store_id, brand_id, store_insert_datetime, store_city, store_address, store_province, store_full_business_name)  VALUES
             (1, 1, '2023-10-02 13:45:00', 'Cologno Monzese', null, null, null),
             (2, 2, '2023-10-04 09:35:00', 'Cologno Monzese', null, null, null),
             (3, 3, '2023-10-23 09:41:00', 'Cologno Monzese', null, null, null),
             (4, 4, '2023-10-23 18:43:00', 'Cologno Monzese', null, null, null),
             (5, 5, '2023-10-31 18:51:00', 'Cologno Monzese', null, null, null),
             (6, 6, '2023-11-04 18:05:00', 'Cassina de Pecchi', 'via Antonia Frigerio Conte 1', 'Milano', null)
             ;

insert into products 
  (id,   barcode_number, product_name,                       description,                   unit_of_measure, measure, department_id, meal_id, meal_category_id, meal_sub_category_id, manufacturer_name, image_file_name)  VALUES 
  (1,     8017596003126, 'Frollini con Gocce di Cioccolato', '',                                    2,        700,     1,            1,         1,                1,                   'Dolciando', '8017596003126.png'),
  (2,     20142766,      'Fior di Cioccolato',               'Frollini per la prima colazione',     2,        700,     1,            1,         1,                1,                   'Realforno', '20142766.jpg'),
  (3,     4056489346326, 'Panettone Classico',               'Panettone classico con canditi',      2,        850,     1,            7,         5,                6,                   'Favorina', '4056489346326.jpeg'),
  (4,     8017596052544, 'Scamorza affumicata',              'Scamorza affumicata preconfezionata', 2,        300,     1,            3,         2,                5,                   'Land',     '8017596052544.jpeg'),
  (5,     8017596002617, 'Farina 00 di grano tenero',        'Farina per tutti gli usi',            5,          1,     1,            8,         null,          null,                   'Tre mulini', '8017596002617.jpeg'),
  (6,     8017596114525, 'Balsamo nutriente',      'Con Olio di Argan - Capelli secchi e sciupati', 4,        250,     2,         null,         null,          null,                   'Near',       '8017596114525.jpeg'),
  (7,     8017596054432, 'Rotoli carta assorbente Decorato', 
                                  'Super assorbente e delicato, Pratico per la tavola e la cucina', 6,          4,     5,         null,         null,          null,                   'Soft Dream', '8017596054432.jpeg'),
  (8,     8008910002543, 'Fortunelli con gocce di Cioccolato','',                                   2,        400,     1,            1,         1,                1,                   'Dolcezze del forno', '8008910002543.jpg'),
  (9,     8002058000171, 'Farina di grano tenero tipo 00',    'Ideale per tutte le preparazioni',   5,          1,     1,            8,         null,          null,                   'Novella', '8002058000171.jpg'),
  (10,    3047200004268, 'Piselli fini',                      'Confezionati appena raccolti',       2,        400,     1,            1,         4,             8,                   'CA'' dell''orto', '3047200004268.jpg'),
  (11,     4056489721062, 'Cous cous',                        '',                                   5,          1,     1,            1,         2,             null,                   'Golden sun', '4056489721062.jpeg'),
  (12,     8002330008130, 'Frollini con Gocce di Cioccolato', '',                                   2,        700,     1,            1,         1,             1,                      'Smart Balconi', '8002330008130.jpeg'),
  (13,     4056489020974, 'Supersoft - Carta igienica profumata', 
                                           'Ultra morbida e resistente - 4 veli - 200 strappi',     6,          4,     2,         null,      null,           null,                      'Floralys', '4056489020974.jpeg'),
  (14,     4056489659259, 'Ammorbidente', 'Armonie di lavanda e camomilla',                         4,        750,     4,         null,         null,          null,                    'Doussy',   '4056489659259.jpeg'),
  (15,     8002339500604, 'Formaggini di latte', 'Latterie Inalpi',                                 2,        140,     1,            3,         2,             10,                       'In.Al.Pi Spa', '8002339500604.jpeg'),
  (16,     8000633038731, 'Yogurt Intero Bianco', 'Latte Alto Adige',                               2,        500,     1,            4,         2,             11,                     'Latte Montagna Alto Adige Soc. Agr. Coop.', '8000633038731.jpg'),
  (17,     8000015002893,      'le GOCCINE con gocce di cioccolato', 
                                                       'Frollini biscotti golosi da inzuppare',     2,        700,     1,            1,         1,              1,                     'DiLeo', '8000015002893.jpeg'),
  (18,     8030582012162,      'Primia Frollini con GOCCE di CIOCCOLATO', '',                       2,        700,     1,            1,         1,              1,                   'Primia', '8030582012162.jpeg'),
  (19,     8030582006772,      'WC GEL con candeggina', 'Igienizzante - AZIONE SBIANCANTE',         4,        750,     4,         null,      null,           null,                   'Primia', '8030582006772.jpeg'),
  (20,     8030582001159,      'Ammoniaca Profumata', 'Per la detergenza dei tessuti e delle superfici della casa',
                                                                                                    4,       1000,     4,         null,      null,           null,                   'Primia', '8030582001159.jpeg'),
  (21,     8017596014191, 'Formaggini', 'Morbidosi e cremosi',                                      2,        280,     1,            3,         2,             10,                       'Land', '8017596014191.jpeg')
  ;
 

insert into price_registry (id, product_id, selling_prize, list_prize, insert_datetime, store_id) VALUES
             ( 1,  1, 2.39, 2.39, '2023-10-02 13:45:00', 1),
             ( 2,  2, 2.39, 2.39, '2023-10-04 09:35:00', 2),
             ( 3,  3, 3.49, 3.49, '2023-10-18 08:38:00', 2),
             ( 4,  4, 2.49, 2.49, '2023-10-02 13:45:00', 1),
             ( 5,  5, 0.55, 0.55, '2023-10-20 13:21:00', 1),
             ( 6,  6, 1.29, 1.29, '2023-10-20 13:21:00', 1),
             ( 7,  7, 1.65, 1.65, '2023-10-20 13:21:00', 1),
             ( 8,  8, 1.29, 1.29, '2023-10-23 09:41:00', 3),
             ( 9,  9, 0.59, 0.59, '2023-10-23 09:41:00', 3),
             (10, 10, 0.85, 0.85, '2023-10-23 09:41:00', 3),
             (11, 11, 1.79, 1.79, '2023-10-23 09:30:00', 2),
             (12, 12, 2.08, 2.08, '2023-10-23 18:43:00', 4),
             (13, 13, 2.39, 2.39, '2023-10-20 13:46:00', 2),
             (14, 14, 1.09, 1.09, '2023-10-20 13:46:00', 2),
             (15, 15, 1.19, 1.19, '2023-10-31 18:51:00', 5),
             (16, 16, 1.29, 1.29, '2023-10-31 18:51:00', 5),
             (17, 17, 1.90, 2.20, '2023-11-04 18:05:00', 6),
             (18, 18, 2.59, 2.59, '2023-11-04 18:05:00', 6),
             (19, 19, 1.09, 1.09, '2023-11-04 18:05:00', 6),       
             (20, 20, 0.75, 0.75, '2023-11-04 18:05:00', 6),        
             (21, 21, 1.69, 1.69, '2023-11-03 09:09:00', 1)             
                        
                                 
                           
                          
             ;