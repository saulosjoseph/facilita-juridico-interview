import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { CreatClientInterface } from "../../interfaces/useCases/clients/CreateClientInterface";

export class CreateClientUseCase implements CreatClientInterface {
  constructor(
    private readonly createPostRepository: ClientRepository,
  ) {}

  async execute(newClient: CreatClientInterface.Request): Promise<CreatClientInterface.Response> {
    return this.createPostRepository.createClient(newClient);
  }
}
