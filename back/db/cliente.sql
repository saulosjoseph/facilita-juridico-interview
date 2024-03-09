CREATE DATABASE facilitaJuridico;

\c facilitaJuridico;

CREATE TABLE "Clientes" (
    "nome" VARCHAR(30) NOT NULL,
    "email" VARCHAR(2) NOT NULL,
    "telefone" INT NOT NULL,
    "coordenadaX" INT NOT NULL,
    "coordenadaY" INT NOT NULL,
);