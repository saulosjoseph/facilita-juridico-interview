import { Address } from "./Address";

export interface Client {
    id?: number;
    name: string;
    email: string;
    phone: string;
    address?: Address;
}