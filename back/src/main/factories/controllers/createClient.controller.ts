import { ClientRepository } from "../../../infra/db/pg/repositories/clientRepository";
import { BaseController } from "../../../infra/http/controllers/baseController";
import { CreateClientController } from "../../../infra/http/controllers/createClientController";
import { makeCreateClientUseCase } from "../useCases/createClient.useCase";
import { makeCreateClientValidation } from "../validations/createClient.validation-factory";

export const makeCreateClientController = (clientRepository: ClientRepository): BaseController => {
  const validation = makeCreateClientValidation();
  const useCase = makeCreateClientUseCase(clientRepository);
  return new CreateClientController(validation, useCase);
};
