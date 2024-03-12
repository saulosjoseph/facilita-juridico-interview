import { FilterClientInterface } from "../../../application/interfaces/useCases/clients/FilterClientInterface";
import { ListClientInterface } from "../../../application/interfaces/useCases/clients/ListClientInterface";
import { Client } from "../../../domain/entities/client";
import { ok } from "../helpers/http";
import { HttpRequest } from "../interfaces/httpRequest";
import { HttpResponse } from "../interfaces/httpResponse";
import { BaseController } from "./baseController";

export class FilterClientController extends BaseController {

    constructor(
        private filterClientUseCase: FilterClientInterface,
        private listClientUseCase: ListClientInterface
    ) {
        super();
    }

    async execute(httpRequest: FilterClientController.Request): Promise<FilterClientController.Response> {
        if (Object.keys(httpRequest.query).length === 0) {
            const clients = await this.listClientUseCase.execute();
            return ok(clients);
        }
        const clients = await this.filterClientUseCase.execute(httpRequest.query);
        return ok(clients);
    }
}

export namespace FilterClientController {
    export type Request = HttpRequest<Partial<Client>>;
    export type Response = HttpResponse<Array<Client>>;
}