import { Client } from "../entities/Client"
import { IRepository } from "../interfaces/repository"
import { UseCase } from "../interfaces/useCase";

export class ListClientUseCase implements UseCase {
    constructor(private clientRepository: IRepository) { }

    async execute(): Promise<Array<Client>> {
        try {
            const exec = await this.clientRepository.getAll()
            return exec;
        } catch (error) {
            console.log(error);
            throw Error("Erro ao buscar clientes")
        }
    }
}