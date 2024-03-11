import { Validator } from "../interfaces/validator";
import { Client } from "../entities/Client";

export class CreateClientValidator implements Validator{
    public validate(newClient: Client): boolean {
        return !!(newClient.email && newClient.phone && newClient.name && newClient.address?.x && newClient.address.y)
    }
}