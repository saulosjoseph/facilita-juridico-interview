import { Client } from "../entities/Client"
import { IClientRepository } from "../../interfaces/clientRepository"
import { UseCase } from "../../interfaces/useCase";

export class CreateClientUseCase implements UseCase {
    constructor(private clientRepository: IClientRepository) { }

    async execute(client: Client): Promise<{
        created: true
    }> {
        try {
            await this.clientRepository.create(client)
            return {
                created: true
            };
        } catch (error) {
            console.log(error);
            throw new Error("Error ao criar cliente")
        }
    }
}