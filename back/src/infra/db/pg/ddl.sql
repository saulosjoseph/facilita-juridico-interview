CREATE DATABASE facilitajuridico;

\c facilitajuridico;

CREATE TABLE Clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Addresses (
    id SERIAL PRIMARY KEY,
    client INT NOT NULL,
    FOREIGN KEY (client) REFERENCES Clients(id),
    X INT NOT NULL,
    Y INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a trigger function to update the updatedAt field
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updatedAt := CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger on the Clients table
CREATE TRIGGER clients_update_updated_at
BEFORE UPDATE ON Clients
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Create a trigger on the Addresses table
CREATE TRIGGER addresses_update_updated_at
BEFORE UPDATE ON Addresses
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();