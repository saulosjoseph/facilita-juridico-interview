import { CreatClientInterface } from "../../../application/interfaces/useCases/clients/CreateClientInterface";
import { Client } from "../../../domain/entities/client";
import { ok } from "../helpers/http";
import { HttpRequest } from "../interfaces/httpRequest";
import { HttpResponse } from "../interfaces/httpResponse";
import { Validation } from "../interfaces/validation";
import { BaseController } from "./baseController";

export class CreateClientController extends BaseController {

    constructor(
        private readonly createPostValidation: Validation,
        private createClientUseCase: CreatClientInterface
    ) {
        super(createPostValidation);
    }

    async execute(httpRequest: CreateClientController.Request): Promise<CreateClientController.Response> {
        const newClient = await this.createClientUseCase.execute(httpRequest.body!);
        return ok(newClient);
    }
}

export namespace CreateClientController {
    export type Request = HttpRequest<CreatClientInterface.Request>;
    export type Response = HttpResponse<Client>;
}