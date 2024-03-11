import { Client } from "../entities/Client";

export interface IRepository {
    getAll: () => Promise<Array<Client>>
    create: (client: Client) => Promise<Client>
    filter: (filter: Partial<Client>) => Promise<Array<Client>>
}