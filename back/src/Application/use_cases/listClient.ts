import { Client } from "../../Domain/entities/Client"
import { UseCase } from "../helpers"
import { IClientRepository } from "../interfaces/clientRepository"

export class ListClientUseCase implements UseCase {
    constructor(private clientRepository: IClientRepository) { }

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