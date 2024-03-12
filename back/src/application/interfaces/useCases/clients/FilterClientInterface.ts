import { Client } from "../../../../domain/entities/client";
import { UseCase } from "../UseCase";

export interface FilterClientInterface extends UseCase<FilterClientInterface.Request, FilterClientInterface.Response> {
  execute(postData: FilterClientInterface.Request): Promise<FilterClientInterface.Response>;
}

export namespace FilterClientInterface {
  export type Request = Partial<Client>;
  export type Response = Array<Client>;
}
