import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { ListClientInterface } from "../../interfaces/useCases/clients/ListClientInterface";

export class ListClientUseCase implements ListClientInterface {
  constructor(
    private readonly createPostRepository: ClientRepository,
  ) {}

  async execute(): Promise<ListClientInterface.Response> {
    return this.createPostRepository.listClient();
  }
}
