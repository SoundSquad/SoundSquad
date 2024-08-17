create database sound_squad default character set utf8 collate utf8_general_ci;
show databases;
use sound_squad;

create user 'user'@'%' identified with mysql_native_password by '1234'; 
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

flush privileges;
