import { ClientRepository } from "./sqlDb/client/clientRepository";
import SqlDb from "./sqlDb/config";
import { CreateClientUseCase } from "../Core/use_cases/createClient";
import { FilterClientUseCase } from "../Core/use_cases/filterClient";
import { ListClientUseCase } from "../Core/use_cases/listClient";
import { CreateClientController } from "../Core/controllers/createClientController";
import { CreateClientValidator } from "../Core/controllers/createClientValidator";
import { FilterClientController } from "../Core/controllers/filterClientController";

export default class SingleTon {
    private static _instance: SingleTon
    private readonly SqlDb: SqlDb;
    private readonly listClientUseCase: ListClientUseCase;
    private readonly filterClientUseCase: FilterClientUseCase;
    private readonly createClientUseCase: CreateClientUseCase;
    private readonly clientRepository: ClientRepository;
    private readonly createClientValidator: CreateClientValidator;
    
    public readonly createClientController: CreateClientController;
    public readonly filterClientController: FilterClientController;

    private constructor() {
        this.SqlDb = new SqlDb();
        this.clientRepository = new ClientRepository(this.SqlDb);
        this.listClientUseCase = new ListClientUseCase(this.clientRepository);
        this.createClientUseCase = new CreateClientUseCase(this.clientRepository);
        this.filterClientUseCase = new FilterClientUseCase(this.clientRepository);
        this.createClientValidator = new CreateClientValidator();
        this.createClientController = new CreateClientController(this.createClientUseCase, this.createClientValidator)
        this.filterClientController = new FilterClientController(this.filterClientUseCase)
    }

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new SingleTon();
        return this._instance;
    }
}