"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientRepository_1 = require("../Infrastructure/clientRepository");
const config_1 = __importDefault(require("../Infrastructure/sqlDb/config"));
const createClient_1 = require("./use_cases/createClient");
const listClient_1 = require("./use_cases/listClient");
class SingleTon {
    constructor() {
        this.SqlDb = new config_1.default();
        this.clientRepository = new clientRepository_1.ClientRepository(this.SqlDb);
        this.listClientUseCase = new listClient_1.ListClientUseCase(this.clientRepository);
        this.createClientUseCase = new createClient_1.CreateClientUseCase(this.clientRepository);
    }
    static getInstance() {
        if (this._instance) {
            return this._instance;
        }
        this._instance = new SingleTon();
        return this._instance;
    }
}
exports.default = SingleTon;
