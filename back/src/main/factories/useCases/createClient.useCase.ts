import { CreatClientInterface } from "../../../application/interfaces/useCases/clients/CreateClientInterface";
import { CreateClientUseCase } from "../../../application/useCases/clients/CreateClient";
import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";

export const makeCreateClientUseCase = (clientRepository: ClientRepository): CreatClientInterface => {
  return new CreateClientUseCase(clientRepository);
};
