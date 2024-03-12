import { Address } from "../../../domain/entities/address";
import { Client } from "../../../domain/entities/client";

export type ClientNestedResponse = Omit<Client, "addres"> & { createdat: Client["createdAt"] } & Address & { addresscreatedat: Address["createdAt"] } & Exclude<Address, "createdAt">;