CREATE DATABASE LANDINGPAGE;
USE LANDINGPAGE;

CREATE TABLE PROPOSTA(
CODIGO INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
NOME VARCHAR(100) NOT NULL,
EMAIL VARCHAR(120) NOT NULL,
FONE VARCHAR(25) NOT NULL,
CIDADE VARCHAR(150) NOT NULL,
ESTADO VARCHAR(20) NOT NULL,
MODELOCARRO VARCHAR(20) NOT NULL,
HORARIOLIGAR VARCHAR(6) NOT NULL,
MENSAGEM VARCHAR(255)
);