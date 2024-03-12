import { ListClientInterface } from "../../../application/interfaces/useCases/clients/ListClientInterface";
import { ListClientUseCase } from "../../../application/useCases/clients/ListClient";
import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";

export const makeListClientUseCase = (clientRepository: ClientRepository): ListClientInterface => {
  return new ListClientUseCase(clientRepository);
};
