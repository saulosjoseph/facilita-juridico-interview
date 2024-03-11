import { MissingParamError } from "../errors/missingParamError"
import { Validation } from "../interfaces/validation";

export class RequiredFieldValidation implements Validation {
  constructor(
    private readonly fieldName: string,
  ) {}

  validate(input: any): Error | null {
    const fieldNames = this.fieldName.split('.');
    let currentObj = input;

    for (const fieldName of fieldNames) {
      if (!currentObj || !currentObj[fieldName]) {
        return new MissingParamError(this.fieldName);
      }
      currentObj = currentObj[fieldName];
    }

    return null;
  }
}
