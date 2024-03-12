import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { BaseController } from "../../../infra/http/controllers/baseController";
import { GetShortestRouteController } from "../../../infra/http/controllers/getShortestRouteController";
import { makeGetShortestUseCase } from "../useCases/getShortestRoute.useCase";

export const makeGetShortestRouteController = (clientRepository: ClientRepository): BaseController => {
  const useCase = makeGetShortestUseCase(clientRepository);
  return new GetShortestRouteController(useCase);
};
