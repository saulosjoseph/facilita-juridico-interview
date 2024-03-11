import { RequiredFieldValidation } from "../../../infra/http/validations/requiredFieldValidation";
import { ValidationComposite } from "../../../infra/http/validations/validationComposite";

export const makeCreateClientValidation = (): ValidationComposite => new ValidationComposite([
  new RequiredFieldValidation('name'),
  new RequiredFieldValidation('email'),
  new RequiredFieldValidation('phone'),
  new RequiredFieldValidation('address.x'),
  new RequiredFieldValidation('address.y'),
], 'body');
