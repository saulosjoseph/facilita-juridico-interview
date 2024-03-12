import { CreatClientInterface } from "../../../application/interfaces/useCases/clients/CreateClientInterface";
import { GetShortestRouteInterface } from "../../../application/interfaces/useCases/clients/GetShortestRouteInterface";
import { ListClientInterface } from "../../../application/interfaces/useCases/clients/ListClientInterface";
import { Client } from "../../../domain/entities/client";
import { ok } from "../helpers/http";
import { HttpRequest } from "../interfaces/httpRequest";
import { HttpResponse } from "../interfaces/httpResponse";
import { BaseController } from "./baseController";

export class GetShortestRouteController extends BaseController {

    constructor(
        private getShortestRouteUseCase: GetShortestRouteInterface
    ) {
        super();
    }

    async execute(httpRequest: ListClientController.Request): Promise<ListClientController.Response> {
        const listClient = await this.getShortestRouteUseCase.execute();
        return ok(listClient);
    }
}

export namespace ListClientController {
    export type Request = HttpRequest<GetShortestRouteInterface.Request>;
    export type Response = HttpResponse<Array<Client>>;
}