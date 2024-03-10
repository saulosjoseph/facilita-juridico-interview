import { Client } from "../client/entities/Client";
import { Filter } from "./filter";

export interface IClientRepository {
    getAll: () => Promise<Array<Client>>
    create: (client: Client) => Promise<Client>
    filter: (filter: Array<Filter>) => Promise<Array<Client>>
}