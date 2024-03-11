import { CreateClientRepository } from "../../../../application/interfaces/repositories/createClientRepository";
import { Address } from "../../../../domain/entities/address";
import { Client } from "../../../../domain/entities/client";
import PgDbConnection from "../config";

export class ClientRepository implements CreateClientRepository {

    constructor(private db: PgDbConnection) { }

    public async createClient(client: CreateClientRepository.Request): Promise<Client> {
        const newClient = await this.db.query<Array<CreateClientRepository.NewClient>>("INSERT INTO Clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *;", [client.name, client.email, client.phone]);
        const newAddress = await this.db.query<Array<Address>>("INSERT INTO Addresses (client, x, y) VALUES ($1, $2, $3) RETURNING *;", [newClient[0].id, client.address?.x, client.address?.y]);
        return { ...newClient[0], address: newAddress[0] }
    }
}
