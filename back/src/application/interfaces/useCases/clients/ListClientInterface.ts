import { Client } from "../../../../domain/entities/client";
import { UseCase } from "../UseCase";

export interface ListClientInterface
  extends UseCase<ListClientInterface.Request, ListClientInterface.Response> {
  execute(postData: ListClientInterface.Request): Promise<ListClientInterface.Response>;
}

export namespace ListClientInterface {
  export type Request = void;
  export type Response = Array<Client>;
}
