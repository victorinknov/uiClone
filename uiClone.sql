CREATE DATABASE uiClone; -- -> Cria o banco de dados

USE uiClone;  -- -> Seleciona o banco de dados

-- DROP DATABASE dblinks; -- -> Deleta o banco de dados

CREATE TABLE tbDistro(
     idDistro INT (11) AUTO_INCREMENT PRIMARY KEY,
     distroName VARCHAR (128) not null,
     releaseVersion VARCHAR (32) not null,
     statusDistro VARCHAR (16) not null
);

CREATE TABLE tbUser(
     idUser INT(11) AUTO_INCREMENT PRIMARY KEY,
     idDistro INT not null,
     username VARCHAR(32) not null,
     email VARCHAR(64) not null,
     password VARCHAR(64) not null,
     userImage VARCHAR(512) not null,
     FOREIGN KEY (idDistro) REFERENCES tbDistro (idDistro)
);

CREATE TABLE tbUserUsesDistro(
     idDistro INT not null,
     idUser INT not null,
     FOREIGN KEY (idDistro) REFERENCES tbDistro (idDistro),
     FOREIGN KEY (idUser) REFERENCES tbUser (idUser)
);
