import { Client } from "../../Domain/entities/Client"
import { UseCase } from "../helpers"
import { IClientRepository } from "../interfaces/clientRepository"
import { Filter } from "../interfaces/filter"

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