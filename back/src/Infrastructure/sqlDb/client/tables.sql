CREATE DATABASE facilitajuridico;

\c facilitajuridico;

CREATE TABLE Clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone INT NOT NULL
);

CREATE TABLE Addresses (
    id SERIAL PRIMARY KEY,
    client INT NOT NULL,
    FOREIGN KEY (client) REFERENCES Clients(id),
    X INT NOT NULL,
    Y INT NOT NULL
);