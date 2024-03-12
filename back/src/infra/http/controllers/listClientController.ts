import { CreatClientInterface } from "../../../application/interfaces/useCases/clients/CreateClientInterface";
import { ListClientInterface } from "../../../application/interfaces/useCases/clients/ListClientInterface";
import { Client } from "../../../domain/entities/client";
import { ok } from "../helpers/http";
import { HttpRequest } from "../interfaces/httpRequest";
import { HttpResponse } from "../interfaces/httpResponse";
import { BaseController } from "./baseController";

export class ListClientController extends BaseController {

    constructor(
        private listClientUseCase: ListClientInterface
    ) {
        super();
    }

    async execute(httpRequest: ListClientController.Request): Promise<ListClientController.Response> {
        const listClient = await this.listClientUseCase.execute();
        return ok(listClient);
    }
}

export namespace ListClientController {
    export type Request = HttpRequest<ListClientInterface.Request>;
    export type Response = HttpResponse<Array<Client>>;
}