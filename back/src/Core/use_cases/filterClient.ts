import { Client } from "../entities/Client"
import { UseCase } from "../interfaces/useCase";
import { FilterClient } from "../interfaces/filterClient";
import { IRepository } from "../interfaces/repository";

export class FilterClientUseCase implements UseCase {
    constructor(private clientRepository: IRepository) { }
  
    async execute(filter: Partial<FilterClient>): Promise<Array<Client>> {
        try {
            const exec = await this.clientRepository.filter(filter)
            return exec;
        } catch (error) {
            console.log(error);
            throw Error("Erro ao buscar clientes")
        }
    }
}