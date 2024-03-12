import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { BaseController } from "../../../infra/http/controllers/baseController";
import { FilterClientController } from "../../../infra/http/controllers/filterClientController";
import { makeFilterClientUseCase } from "../useCases/filterClient.useCase";
import { makeListClientUseCase } from "../useCases/listClient.useCase";

export const makeFilterClientController = (clientRepository: ClientRepository): BaseController => {
  const filterClientUseCase = makeFilterClientUseCase(clientRepository);
  const listUseCase = makeListClientUseCase(clientRepository);
  return new FilterClientController(filterClientUseCase, listUseCase);
};
