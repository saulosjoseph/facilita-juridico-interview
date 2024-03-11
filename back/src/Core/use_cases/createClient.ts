import { Client } from "../entities/Client"
import { IRepository } from "../interfaces/repository"
import { UseCase } from "../interfaces/useCase";

export class CreateClientUseCase implements UseCase {
    constructor(private clientRepository: IRepository) { }

    async execute(client: Client): Promise<Client> {
        try {
            const created = await this.clientRepository.create(client)
            return created;
        } catch (error) {
            console.log(error);
            throw new Error("Error ao criar cliente")
        }
    }
}