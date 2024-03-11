import { Errors } from "../errors";
import { CreateClientUseCase } from "../use_cases/createClient";
import { CreateClientValidator } from "./createClientValidator";
import { Controller } from "../interfaces/controller";
import { Client } from "../entities/Client";



export class CreateClientController implements Controller {

    constructor(private createClientUseCase: CreateClientUseCase, private createClientValidator: CreateClientValidator) { }

    public async handle(newClient: Client): Promise<Client> {
        if (!this.isValidRequest(newClient)) {
            throw new Error(Errors.create_400)
        }
        return this.createClientUseCase.execute(newClient);
    }
    public isValidRequest(newClient: Client): boolean {
        return this.createClientValidator.validate(newClient)
    }
}