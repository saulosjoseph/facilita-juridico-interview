import { GetShortestRouteInterface } from "../../../application/interfaces/useCases/clients/GetShortestRouteInterface";
import { GetShortestRouteUseCase } from "../../../application/useCases/clients/GetShortestRoute";
import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";

export const makeGetShortestUseCase = (clientRepository: ClientRepository): GetShortestRouteInterface => {
  return new GetShortestRouteUseCase(clientRepository);
};
