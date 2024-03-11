import { Controller } from "../interfaces/controller";
import { Client } from "../entities/Client";
import { FilterClientUseCase } from "../use_cases/filterClient";

export class FilterClientController implements Controller {

    constructor(private filterClientUseCase: FilterClientUseCase) { }

    public async handle(newClient: Partial<Client>): Promise<Array<Client>> {
        return await this.filterClientUseCase.execute(newClient);
    }
}
