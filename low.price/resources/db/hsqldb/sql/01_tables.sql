
drop table if exists price_registry;
drop table if exists store;
drop table if exists brand;
drop table if exists products;
drop table if exists unit_of_measure;
drop table if exists meal_sub_categories;
drop table if exists meal_categories;
drop table if exists meals;
drop table if exists departments;
drop table if exists users; 
drop table if exists roles; 

create table roles (
	id bigint NOT NULL IDENTITY, 
	label VARCHAR(50),
	description VARCHAR(2000),
	level int,
	primary key(id),
	CONSTRAINT roles_level UNIQUE (level)
);

CREATE TABLE users (
  id bigint NOT NULL IDENTITY,
  email varchar(100) NOT NULL,
  password varchar(100) DEFAULT NULL,
  firstname varchar(50) NOT NULL,
  lastname varchar(50) NOT NULL,
  regdate datetime NOT NULL,
  role int NOT NULL,
  enabled tinyint NOT NULL,
  PRIMARY KEY (id),  
  CONSTRAINT users_email UNIQUE (email),
  CONSTRAINT users_ibfk_1 FOREIGN KEY (role) REFERENCES roles (level)
);

create table departments (
	id bigint not null IDENTITY, 
	label VARCHAR(100),
	description VARCHAR(2000),
	level int,
	primary key(id),
	CONSTRAINT departments_label UNIQUE (label),
	CONSTRAINT departments_description UNIQUE (description),
	CONSTRAINT departments_level UNIQUE (level)
);

create table meals (
	id bigint not null IDENTITY, 
	label VARCHAR(50) not null,
	description VARCHAR(100),
	department_id bigint not null,
	level bigint not null,
	primary key(id),
	CONSTRAINT meals_label UNIQUE (label),
	CONSTRAINT meals_level UNIQUE (level),
    --KEY department_id (department_id),
    CONSTRAINT department_id_ibfk_1 FOREIGN KEY (department_id) REFERENCES departments (id)
);

create table meal_categories (
	id bigint not null IDENTITY, 
	label VARCHAR(100) not null,
	meal_id bigint not null,
	level bigint not null,
	primary key(id),
	CONSTRAINT label UNIQUE (label),
        --KEY meal_id (meal_id),
        CONSTRAINT meal_categories_ibfk_1 FOREIGN KEY (meal_id) REFERENCES meals (id)
);

create table meal_sub_categories (
	id bigint not null IDENTITY, 
	label VARCHAR(100),
	meal bigint not null,
	meal_category bigint not null,
	level bigint,
	primary key(id),
	CONSTRAINT meal_sub_categories_label UNIQUE (label),
	
    --,KEY meal (meal),
    --KEY meal_category (meal_category),
    CONSTRAINT meal_ibfk_1 FOREIGN KEY (meal) REFERENCES meals (id)
    ,CONSTRAINT meal_categories_ibfk_2 FOREIGN KEY (meal_category) REFERENCES meal_categories (id)
);

create table unit_of_measure (
	id bigint not null IDENTITY,
	unit_of_measure_label VARCHAR(50) not null,
	description VARCHAR(100),
	level bigint,
	primary key(id)
);

create table brand (
    brand_id bigint not null IDENTITY,
    brand_name varchar(100) not null, 
    brand_full_business_name varchar(200),
    brand_logo_image_file_name varchar(255),
    brand_insert_datetime datetime not null,
    --insert_by_user_id bigint not null,
    primary key(brand_id)
    --,
    --KEY product_id (product_id),
    --CONSTRAINT product_id_ibfk_1 FOREIGN KEY (product_id) REFERENCES product (id)
);

create table store (
    store_id bigint not null IDENTITY,
    brand_id bigint not null, 
    store_full_business_name varchar(1000),
    store_city varchar(100) not null,
    store_address varchar(300),
    store_province varchar(100),
    store_insert_datetime datetime not null,
    primary key(store_id),
    --KEY brand_id (brand_id),
    CONSTRAINT brand_id_ibfk_1 FOREIGN KEY (brand_id) REFERENCES brand (brand_id)
);

create table products (
	id bigint not null IDENTITY,
	barcode_number  bigint,
	product_name VARCHAR(100),
	description varchar(1000),
	unit_of_measure bigint,
	measure int,
	department_id bigint,
	meal_id bigint,
	meal_category_id bigint,
	meal_sub_category_id bigint,
	manufacturer_name VARCHAR(100),
    image_file_name varchar(255),
	primary key(id),
	CONSTRAINT barcode_number UNIQUE (barcode_number),
	--KEY meal_category (meal_category),
    --KEY meal_sub_category (meal_sub_category),
    --KEY unit_of_measure (unit_of_measure),
    CONSTRAINT meal_categories_ibfk_3 FOREIGN KEY (meal_category_id) REFERENCES meal_categories (id),
    CONSTRAINT meal_sub_categories_ibfk_1 FOREIGN KEY (meal_sub_category_id) REFERENCES meal_sub_categories (id),
    CONSTRAINT unit_of_measure_ibfk_1 FOREIGN KEY (unit_of_measure) REFERENCES unit_of_measure (id),
    CONSTRAINT department_id_ibfk_2 FOREIGN KEY (department_id) REFERENCES departments (id),
    CONSTRAINT meal_id_ibfk_1 FOREIGN KEY (meal_id) REFERENCES meals (id)
);

create table price_registry (
    id bigint not null IDENTITY,
    product_id bigint not null, 
    selling_prize double not null,
    list_prize double,
    insert_datetime datetime not null,
    store_id bigint not null,
    primary key(id),
    --KEY product_id (product_id),
    CONSTRAINT product_id_ibfk_1 FOREIGN KEY (product_id) REFERENCES products (id),
    CONSTRAINT store_id_ibfk_1 FOREIGN KEY (store_id) REFERENCES store (store_id)
);






             
             

