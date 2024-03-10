CREATE DATABASE facilitajuridico;

\c facilitajuridico;

CREATE TABLE Clientes (
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(2) NOT NULL,
    telefone INT NOT NULL
);