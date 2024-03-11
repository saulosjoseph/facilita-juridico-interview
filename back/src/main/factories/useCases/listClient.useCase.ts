import { UseCase } from "../../../Core/interfaces/useCase";
import { CreateClientUseCase } from "../../../Core/use_cases/createClient";
import { ClientRepository } from "../../../Infrastructure/sqlDb/client/clientRepository";

export const makeListClientUseCase = (clientRepository: ClientRepository): UseCase => {
  return new CreateClientUseCase(clientRepository);
};
