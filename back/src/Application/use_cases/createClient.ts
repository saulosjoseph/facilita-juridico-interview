import { Client } from "../../Domain/entities/Client"
import { UseCase } from "../helpers"
import { IClientRepository } from "../interfaces/clientRepository"

export class CreateClientUseCase implements UseCase {
    constructor(private clientRepository: IClientRepository) { }

    async execute(client: Client): Promise<{
        created: true
    }> {
        try {
            const exec = await this.clientRepository.create(client)
            return {
                created: true
            };
        } catch (error) {
            console.log(error);
            throw new Error("Error ao criar cliente")
        }
    }
}