import { Client } from "../entities/Client";

export interface FilterClient extends Client {
    addressX: number,
    addressY: number
}