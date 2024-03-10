import { IClientRepository } from "../Application/interfaces/clientRepository"
import { Filter } from "../Application/interfaces/filter"
import { Client } from "../Domain/entities/Client"
import SqlDb from "./sqlDb/config"

export class ClientRepository implements IClientRepository {
    constructor(private db: SqlDb) { }

    public async getAll(): Promise<Array<Client>> {
        return this.db.query("SELECT * FROM Clientes")
    }
    public async create(client: Client): Promise<Client> {
        return this.db.query("INSERT INTO Clientes (nome, email, telefone) VALUES ($1, $2, $3);", [client.name, client.email, client.phone]);
    }
    public async filter(filter: Array<Filter>): Promise<Array<Client>> {
        let query = "";
        query += "SELECT * FROM Clientes WHERE (";
        filter.forEach(({ field }, index, array) => {
            if (index === array.length - 1) {
                query += `${field})`
            } else {
                query += `${field}, `
            }
        })
        query += "=("
        filter.forEach((field, index, array) => {
            if (index === array.length - 1) {
                query += `$${index + 1})`
            } else {
                query += `$${index + 1}, `
            }
        })
        console.log(query);
        const values = filter.map(({ value }) => value)
        console.log(values);
        return this.db.query(query, values)
    }
}