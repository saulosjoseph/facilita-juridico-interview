import { ClientRepository } from "../Infrastructure/clientRepository";
import SqlDb from "../Infrastructure/sqlDb/config";
import { CreateClientUseCase } from "./use_cases/createClient";
import { FilterClientUseCase } from "./use_cases/filterClient";
import { ListClientUseCase } from "./use_cases/listClient";

export default class SingleTon {
    private static _instance: SingleTon
    private readonly SqlDb: SqlDb;
    public readonly listClientUseCase: ListClientUseCase;
    public readonly filterClientUseCase: FilterClientUseCase;
    public readonly createClientUseCase: CreateClientUseCase;
    private readonly clientRepository: ClientRepository;

    private constructor() {
        this.SqlDb = new SqlDb();
        this.clientRepository = new ClientRepository(this.SqlDb);
        this.listClientUseCase = new ListClientUseCase(this.clientRepository);
        this.createClientUseCase = new CreateClientUseCase(this.clientRepository);
        this.filterClientUseCase = new FilterClientUseCase(this.clientRepository);
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new SingleTon();
        return this._instance;
    }
}