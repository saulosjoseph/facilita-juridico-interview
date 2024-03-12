import { Filter } from "../../../../application/interfaces/helpers/filter";
import { ClientNestedResponse } from "../../../../application/interfaces/repositories/clientNestedResponse";
import { CreateClientRepository } from "../../../../application/interfaces/repositories/createClientRepository";
import { FilterClientRepository } from "../../../../application/interfaces/repositories/filterClientRepository";
import { ListClientRepository } from "../../../../application/interfaces/repositories/listClientRepository";
import { Address } from "../../../../domain/entities/address";
import { Client } from "../../../../domain/entities/client";
import PgDbConnection from "../config";

export class ClientRepository implements CreateClientRepository, ListClientRepository, FilterClientRepository {

    constructor(private db: PgDbConnection) { }

    private handleNestedResponse(response: Array<ClientNestedResponse>): Array<Client> {
        return response.map(client => ({
            id: client.id,
            name: client.name,
            email: client.email,
            phone: client.phone,
            createdAt: client.createdat,
            address: {
                x: client.x,
                y: client.y,
                createdAt: client.addresscreatedat
            }
        }));
    }

    public async createClient(client: CreateClientRepository.Request): Promise<Client> {
        const newClient = await this.db.query<Array<CreateClientRepository.NewClient>>("INSERT INTO Clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *;", [client.name, client.email, client.phone]);
        const newAddress = await this.db.query<Array<Address>>("INSERT INTO Addresses (client, x, y) VALUES ($1, $2, $3) RETURNING *;", [newClient[0].id, client.address?.x, client.address?.y]);
        return { ...newClient[0], address: newAddress[0] }
    }

    public async listClient(): Promise<ListClientRepository.Response> {
        const nestedResponse = await this.db.query<Array<ClientNestedResponse>>("SELECT Clients.*, Addresses.createdAt AS addressCreatedAt, Addresses.client, Addresses.x, Addresses.y FROM Clients LEFT JOIN Addresses ON Addresses.client = Clients.id");
        return this.handleNestedResponse(nestedResponse)
    }

    public async filterClient(data: FilterClientRepository.Request): Promise<FilterClientRepository.Response> {
        let query = "";
        query += "SELECT Clients.*, Addresses.createdAt AS addressCreatedAt, Addresses.client, Addresses.x, Addresses.y FROM Clients LEFT JOIN Addresses ON Addresses.client = Clients.id WHERE (";
        const filter: Array<Filter> = []
        Object.keys(data).forEach(field => filter.push({
            field,
            value: data[field as keyof FilterClientRepository.Request]
        }));
        filter.forEach((fieldValue, index, array) => {
            if (fieldValue.field === "addressX") {
                query += `Addresses.x`
            } else if (fieldValue.field === "addressY") {
                query += `Addresses.y`
            } else {
                query += `Clients.${fieldValue.field}`
            }
            if (index !== array.length - 1) {
                query += ", "
            }
        })
        query += ")=("
        let count = 1;
        filter.forEach((fieldValue, index, array) => {
            query += `$${count}`
            count++
            if (index !== array.length - 1) {
                query += `, `
            }
        })
        query += ")"
        const values = filter.map(({ value }) => value);
        const nestedResponse = await this.db.query<Array<ClientNestedResponse>>(query, values);
        return this.handleNestedResponse(nestedResponse);
    }
}
