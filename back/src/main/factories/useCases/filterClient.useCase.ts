import { FilterClientInterface } from "../../../application/interfaces/useCases/clients/FilterClientInterface";
import { FilterClientUseCase } from "../../../application/useCases/clients/FilterClient";
import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";

export const makeFilterClientUseCase = (clientRepository: ClientRepository): FilterClientInterface => {
  return new FilterClientUseCase(clientRepository);
};
