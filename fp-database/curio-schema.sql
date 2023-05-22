drop database if exists `curiosDB`;
create database `curiosDB`;
use `curiosDB`;

create table if not exists curio (
    curio_id smallint unsigned auto_increment not null,
    curio_name varchar(60) not null,
    curio_price smallint unsigned,
    curio_description text,
    date_acquired date,
    in_stock smallint unsigned,
    curio_image tinytext,
    last_update timestamp default current_timestamp on update current_timestamp,
    constraint pk_curio primary key (curio_id)
);