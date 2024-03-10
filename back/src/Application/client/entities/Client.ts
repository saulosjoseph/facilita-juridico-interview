import { Address } from "./Address";

export interface Client {
    name: string;
    email: string;
    phone: string;
    address: Address;
}