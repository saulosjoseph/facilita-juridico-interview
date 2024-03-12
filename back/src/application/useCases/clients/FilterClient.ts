import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { FilterClientInterface } from "../../interfaces/useCases/clients/FilterClientInterface";

export class FilterClientUseCase implements FilterClientInterface {
  constructor(
    private readonly repository: ClientRepository,
  ) {}

  async execute(data: FilterClientInterface.Request): Promise<FilterClientInterface.Response> {
    return this.repository.filterClient(data);
  }
}
