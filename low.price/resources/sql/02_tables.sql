drop table if exists prize_registry;
drop table if exists point_of_sale;
drop table if exists brand;

drop table if exists products;
drop table if exists unit_of_measure;
drop table if exists meal_sub_categories;
drop table if exists meal_categories;
drop table if exists meals;
drop table if exists departments;


create table departments (
	id bigint not null AUTO_INCREMENT, 
	label VARCHAR(50),
	description VARCHAR(2000),
	level int,
	primary key(id),
	CONSTRAINT label UNIQUE (label),
	CONSTRAINT description UNIQUE (description),
	CONSTRAINT level UNIQUE (level)
);
insert into departments(id, label, description, level) VALUES (1, 'cibo', 'da mangiare', 0);
insert into departments(id, label, description, level) VALUES (2, 'igiene', 'igiene peersonale', 50);
insert into departments(id, label, description, level) VALUES (3, 'articoli casa', 'articoli per la casa', 70);
insert into departments(id, label, description, level) VALUES (4, 'pulizia casa', 'pulizia per la casa', 100);

create table meals (
	id bigint not null AUTO_INCREMENT, 
	label VARCHAR(50) not null,
	description VARCHAR(100),
	department_id bigint not null,
	level bigint not null,
	primary key(id),
	CONSTRAINT label UNIQUE (label),
	CONSTRAINT level UNIQUE (level),
        KEY `department_id` (`department_id`),
        CONSTRAINT `meals_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`)
);
insert into meals(id, label, description, department_id, level) VALUES (1, 'colazione', '', 1, 0);
insert into meals(id, label, description, department_id, level) VALUES (2, 'primi', 'pranzo oppure cena', 1, 50);
insert into meals(id, label, description, department_id, level) VALUES (3, 'secondi', 'pranzo oppure cena', 1, 100);
insert into meals(id, label, description, department_id, level) VALUES (4, 'merenda', '', 1, 150);
insert into meals(id, label, description, department_id, level) VALUES (5, 'frutta', '', 1, 200);
insert into meals(id, label, description, department_id, level) VALUES (6, 'verdura', '', 1, 250);


create table meal_categories (
	id bigint not null AUTO_INCREMENT, 
	label VARCHAR(100) not null,
	meal_id bigint not null,
	level bigint not null,
	primary key(id),
	CONSTRAINT label UNIQUE (label),
        KEY `meal_id` (`meal_id`),
        CONSTRAINT `meal_categories_ibfk_1` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`)
);

insert into meal_categories(id, label, meal_id, level) VALUES (1, 'biscotti', 1, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (2, 'latticini', 2, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (3, 'frutta', 5, 0);
insert into meal_categories(id, label, meal_id, level) VALUES (4, 'verdura cruda/insalata', 6, 0);

create table meal_sub_categories (
	id bigint not null AUTO_INCREMENT, 
	label VARCHAR(100),
	meal bigint not null,
	meal_category bigint not null,
	level bigint,
	primary key(id),
	CONSTRAINT label UNIQUE (label)
	
    ,KEY `meal` (`meal`),
    KEY `meal_category` (`meal_category`),
    CONSTRAINT `meal_ibfk_1` FOREIGN KEY (`meal`) REFERENCES `meals` (`id`)
    ,CONSTRAINT `meal_categories_ibfk_2` FOREIGN KEY (`meal_category`) REFERENCES `meal_categories` (`id`)
);

insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (1, 'biscotti con gocce di cioccolato', 1, 1, 100);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (2, 'biscotti alla panna(tipo macine)', 1, 1, 200);
--insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (3, 'biscotti', 1, 1, 0);
insert into meal_sub_categories(id, label, meal, meal_category, level) VALUES (4, 'mozzarelle', 3, 2, 100);

create table unit_of_measure (
	id bigint not null AUTO_INCREMENT,
	label VARCHAR(50) not null,
	description VARCHAR(100),
	level bigint,
	primary key(id)
);

insert into unit_of_measure(id, label, level) VALUES (1, 'confezioni', 10);
insert into unit_of_measure(id, label, description, level) VALUES (2, 'gr', 'grammi', 100);
insert into unit_of_measure(id, label, description, level) VALUES (3, 'l', 'litri', 200);
insert into unit_of_measure(id, label, description, level) VALUES (4, 'ml', 'millilitri', 150);

create table products (
	id bigint not null AUTO_INCREMENT,
	barcode_number  bigint,
	product_name VARCHAR(100),
	description varchar(1000),
	unit_of_measure bigint,
	measure int,
	meal_category bigint,
	meal_sub_category bigint,
	manufacturer_name VARCHAR(100),
    image_file_name varchar(255),
	primary key(id),
	CONSTRAINT barcode_number UNIQUE (barcode_number),
	KEY `meal_category` (`meal_category`),
    KEY `meal_sub_category` (`meal_sub_category`),
    KEY `unit_of_measure` (`unit_of_measure`),
    CONSTRAINT `meal_categories_ibfk_3` FOREIGN KEY (`meal_category`) REFERENCES `meal_categories` (`id`),
    CONSTRAINT `meal_sub_categories_ibfk_1` FOREIGN KEY (meal_sub_category) REFERENCES `meal_sub_categories` (`id`),
    CONSTRAINT `unit_of_measure_ibfk_1` FOREIGN KEY (unit_of_measure) REFERENCES `unit_of_measure` (`id`)
);


insert into products (id, barcode_number, product_name, description, unit_of_measure, measure, meal_category, meal_sub_category, manufacturer_name, image_file_name) 
             VALUES (1, 8017596003126, 'Frollini con Gocce di Cioccolato', '', 2, 700, 1, 1, 'Dolciando', '8017596003126.png');

insert into products (id, barcode_number, product_name, description, unit_of_measure, measure, meal_category, meal_sub_category, manufacturer_name, image_file_name) 
             VALUES (2, 20142766, 'Fior di Cioccolato', 'Frollini per la prima colazione', 2, 700, 1, 1, 'Realforno', '20142766.jpg');


create table brand (
    id bigint not null AUTO_INCREMENT,
    brand_name varchar(100) not null, 
    full_business_name varchar(200),
    logo_image_file_name varchar(255),
    insert_datetime datetime not null,
    --insert_by_user_id bigint not null,
    primary key(id)
    --,
    --KEY `product_id` (`product_id`),
    --CONSTRAINT `product_id_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
);

insert into brand (id, brand_name, insert_datetime) 
             VALUES (1, 'EUROSPIN', '2023-10-02 13:45:00');

insert into brand (id, brand_name, insert_datetime) 
             VALUES (2, 'LIDL', '2023-10-04 09:35:00');

create table point_of_sale (
    id bigint not null AUTO_INCREMENT,
    brand_id bigint not null, 
    point_of_sale_full_business_name varchar(1000),
    city varchar(100) not null,
    address varchar(300),
    insert_datetime datetime not null,
    primary key(id),
    KEY `brand_id` (`brand_id`),
    CONSTRAINT `brand_id_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
);

insert into point_of_sale (id, brand_id, insert_datetime, city) 
             VALUES (1, 1, '2023-10-02 13:45:00', 'Cologno Monzese');

insert into point_of_sale (id, brand_id, insert_datetime, city) 
             VALUES (2, 2, '2023-10-04 09:35:00', 'Cologno Monzese');

create table prize_registry (
    id bigint not null AUTO_INCREMENT,
    product_id bigint not null, 
    prize double not null,
    insert_datetime datetime not null,
    primary key(id),
    KEY `product_id` (`product_id`),
    CONSTRAINT `product_id_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);


insert into prize_registry (id, product_id, prize, insert_datetime) 
             VALUES (1, 1, 2.39, '2023-10-02 13:45:00');

insert into prize_registry (id, product_id, prize, insert_datetime) 
             VALUES (2, 2, 2.39, '2023-10-04 09:35:00');
