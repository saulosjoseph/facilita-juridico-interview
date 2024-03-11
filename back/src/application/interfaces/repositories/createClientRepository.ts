import { Client } from "../../../domain/entities/client";

export interface CreateClientRepository {
  createClient(ClientData: CreateClientRepository.Request): Promise<Client>;
}

export namespace CreateClientRepository {
  export type Request = Omit<Client, 'id' & 'createdAt' & 'updatedAt'>;
  export type NewClient = Omit<Client, 'address'>;
}
