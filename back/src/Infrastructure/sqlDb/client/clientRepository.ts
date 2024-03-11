import { Filter } from "../../../Core/interfaces/filter"
import SqlDb from "../config"
import { Client } from "../../../Core/entities/Client";
import { Address } from "../../../Core/entities/Address";
import { FilterClient } from "../../../Core/interfaces/filterClient";
import { IRepository } from "../../../Core/interfaces/repository";

export class ClientRepository implements IRepository {
    constructor(private db: SqlDb) { }

    public async getAll(): Promise<Array<Client>> {
        return this.db.query("SELECT * FROM Clients LEFT JOIN Addresses ON Addresses.client = Clients.id")
    }
    public async create(client: Client): Promise<Client> {
        const newClient = await this.db.query<Array<Client>>("INSERT INTO Clients (name, email, phone) VALUES ($1, $2, $3) RETURNING *;", [client.name, client.email, client.phone]);
        const newAddress = await this.db.query<Address>("INSERT INTO Addresses (client, x, y) VALUES ($1, $2, $3) RETURNING *;", [newClient[0].id, client.address?.x, client.address?.y]);
        return { ...newClient[0], address: newAddress }
    }
    public async filter(data: Partial<FilterClient>): Promise<Array<Client>> {
        let query = "";
        query += "SELECT * FROM Clients LEFT JOIN Addresses ON Addresses.client = Clients.id WHERE (";
        const filter: Array<Filter> = []
        Object.keys(data).forEach(field => filter.push({
            field,
            value: data[field as keyof FilterClient]
        }));
        filter.forEach((fieldValue, index, array) => {
            if (fieldValue.field === "addressX") {
                query += `Addresses.x`
            } else if (fieldValue.field === "addressY") {
                query += `Addresses.y`
            } else {
                query += `Clients.${fieldValue.field}`
            }
            if (index === array.length - 1) {
                query += ")"
            } else {
                query += ", "
            }
        })
        query += "=("
        let count = 1;
        filter.forEach((fieldValue, index, array) => {
            query += `$${count}`
            count++
            if (index === array.length - 1) {
                query += `)`
            } else {
                query += `, `
            }
        })
        const values = filter.map(({ value }) => value);
        return this.db.query<Array<Client>>(query, values)
    }
}