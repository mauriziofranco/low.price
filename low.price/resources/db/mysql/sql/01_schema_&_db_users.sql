drop database IF EXISTS  lowprice_dev;
create database lowprice_dev;
CREATE USER 'lowprice_dev'@'%' IDENTIFIED BY 'lowprice_dev';
GRANT ALL PRIVILEGES ON lowprice_dev.* TO 'lowprice_dev'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;




