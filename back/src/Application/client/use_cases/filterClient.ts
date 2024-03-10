import { Client } from "../entities/Client"
import { IClientRepository } from "../../interfaces/clientRepository"
import { Filter } from "../../interfaces/filter"
import { UseCase } from "../../interfaces/useCase";

export class FilterClientUseCase implements UseCase {
    constructor(private clientRepository: IClientRepository) { }
  
    async execute(filter: Array<Filter>): Promise<Array<Client>> {
        try {
            const exec = await this.clientRepository.filter(filter)
            return exec;
        } catch (error) {
            console.log(error);
            throw Error("Erro ao buscar clientes")
        }
    }
}