import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { BaseController } from "../../../infra/http/controllers/baseController";
import { ListClientController } from "../../../infra/http/controllers/listClientController";
import { makeListClientUseCase } from "../useCases/listClient.useCase";

export const makeListClientController = (clientRepository: ClientRepository): BaseController => {
  const useCase = makeListClientUseCase(clientRepository);
  return new ListClientController(useCase);
};
