import { Client } from "../../../../domain/entities/client";
import { UseCase } from "../UseCase";

export interface CreatClientInterface
  extends UseCase<CreatClientInterface.Response, CreatClientInterface.Response> {
  execute(postData: CreatClientInterface.Request): Promise<CreatClientInterface.Response>;
}

export namespace CreatClientInterface {
  export type Request = Omit<Client, 'id' & 'createdAt' & 'updatedAt'>;
  export type Response = Client;
}
