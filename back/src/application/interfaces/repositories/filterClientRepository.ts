import { Client } from "../../../domain/entities/client";
import { Filter } from "../helpers/filter";

export interface FilterClientRepository {
  filterClient(ClientData: FilterClientRepository.Request): Promise<FilterClientRepository.Response>;
}

export namespace FilterClientRepository {
  export type Request = Partial<Client>;
  export type Response = Array<Client>;
} 
