import { Client } from "../../../../domain/entities/client";
import { UseCase } from "../UseCase";

export interface GetShortestRouteInterface extends UseCase<GetShortestRouteInterface.Request, GetShortestRouteInterface.Response> {
  execute(postData: GetShortestRouteInterface.Request): Promise<GetShortestRouteInterface.Response>;
}

export namespace GetShortestRouteInterface {
  export type Request = void;
  export type Response = Array<Client>;
}
