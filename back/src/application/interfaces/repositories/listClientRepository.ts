import { Address } from "../../../domain/entities/address";
import { Client } from "../../../domain/entities/client";

export interface ListClientRepository {
  listClient(ClientData: ListClientRepository.Request): Promise<ListClientRepository.Response>;
}

export namespace ListClientRepository {
  export type Request = void;
  export type Response = Array<Client>;
} 
